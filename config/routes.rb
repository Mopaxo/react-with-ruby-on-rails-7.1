Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :questions, only: [:index, :create, :destroy, :show] do
        member do
          put :update_counter
          put :update_answer
          get :show_answer
        end
        collection do
          get :get_tags
        end
        resources :comments, only: [:create] # Rutas anidadas para comentarios
      end
    end
  end
end