Rails.application.routes.draw do
  root 'home#index'


  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create, :destroy] do
        member do
          put :update_counter
          put :update_answer
        end
        collection do
          get :get_tags
        end
      end
    end
  end
  
end
