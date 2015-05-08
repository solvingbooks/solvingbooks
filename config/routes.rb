Rails.application.routes.draw do

  root 'static_pages#home' 
 
  resources :ingenieria_electronica, only: [:index] do
    collection do
      get 'circuitos_electricos'    
    end
  end
end
