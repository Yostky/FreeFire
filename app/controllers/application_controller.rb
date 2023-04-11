class ApplicationController < ActionController::API
    before_action :authenticate_request
  
    private
  
    def authenticate_request
      auth_header = request.headers['Authorization']
      token = auth_header.split(' ').last if auth_header
      @current_user = JsonWebToken.decode(token)[:user_id] if token
    rescue JWT::DecodeError
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
end
  
