json.array! @new_article do |article|
  json.id article.id
  json.text article.text
  json.image article.image
  json.img article.img.url
  json.youtube_url article.youtube_url.last(11)
  json.user_id article.user_id
  json.nickname article.user.nickname
  json.user_sign_in current_user
end