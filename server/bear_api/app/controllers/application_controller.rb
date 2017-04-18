class ApplicationController < ActionController::API
  before_action :authenticate

  def logged_in?
    authenticate_or_request_with_http_token do |token, options|
      User.find_by(auth_token: token)
    end
  end

end
