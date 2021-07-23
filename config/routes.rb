Rails.application.routes.draw do
  root 'items#app'
  resources :items

  put '/items/:id/upvote', to: 'items#upvote'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
