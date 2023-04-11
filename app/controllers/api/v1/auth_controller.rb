class Api::V1::AuthController < ApplicationController
    skip_before_action :authenticate_request, only: %i[register login]
    require 'json_web_token'

    def register
        user = User.new(user_params)
        if user.save
        render json: { message: 'User created successfully' }, status: :created
        else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def login
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
        token = JsonWebToken.encode(user_id: user.id)
        render json: { token: token }, status: :ok
        else
        render json: { error: 'Invalid credentials' }, status: :unauthorized
        end
    end

    def refresh_token
        refresh_token = request.headers['Authorization']&.split(' ')&.last
        if refresh_token
            decoded_token = JWT.decode(refresh_token, Rails.application.secrets.secret_key_base, true, { algorithm: 'HS256' })[0]
            user = User.find(decoded_token['user_id'])
            if user
            render json: { token: user.generate_jwt }
            else
            head :unauthorized
            end
        else
            head :unauthorized
        end
        rescue JWT::DecodeError
        head :unauthorized
    end
        

    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end
