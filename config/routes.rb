Rails.application.routes.draw do
  root 'home#index'


  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create] do
        member do
          put :update_counter
        end
        collection do
          get :get_tags
        end
      end
    end
  end
  
end
