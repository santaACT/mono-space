$(document).on('turbolinks:load', function() {
  $(function() {
    var search_list = $(".contents.high");

    function appendArticle(article) {
      if(article.user_sign_in && article.user_sign_in.id == article.user_id){
        var current_user = `<li>
                              <a href="/articles/${article.id}/edit" data-method="get" >編集</a>
                            </li>
                            <li>
                              <a href="/articles/${article.id}" data-method="delete" >削除</a>
                            </li>`
      } else {
        var current_user = ""
      }

      var image = article.image ? `<div class="content_back" style="background-image: url(${article.image});">` :"";
      var img = article.img ? `<img class="img_content" src="${article.img}">` : "";
      var youtube_url = article.youtube_url ? `<iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameborder="0" height="315" src="https://www.youtube.com/embed/${article.youtube_url}" width="560"></iframe>` : "";
      var no_image = "";
      if(image == false ){
        if(img == false) {
          if(youtube_url == false) {
            var no_image = `<img class="img_content" src="/assets/no_image.jpg">`;
          }
        }
      }

      var html = `<div class="article" data-article-id = "${article.id}">
                    <div class="content_post">
                      ${image}
                      ${img}
                      ${youtube_url}
                      ${no_image}
                        <div class="more">
                          <span><img src="/assets/arrow_top.png"></span>
                          <ul class="more_list">
                            <li>
                              <a href="/articless/${article.id}" data-method="get" >詳細</a>
                            </li>
                            ${current_user}
                          </ul>
                        </div>
                        <p>${article.text}</p><br>
                        <span class="name">
                          <a href="/users/${article.user_id}">
                            <span>投稿者</span>${article.nickname}
                          </a>
                        </span>
                    </div>
                  </div>`
      search_list.prepend(html);
    }

    function appendErrMsgToHTML(msg) {
      var html = `<div class='name'>${ msg }</div>`
      search_list.append(html);
    }

    $(".search-input").on("keyup", function() {
      var input = $(".search-input").val();
      if (input.length !== 0 ) {
        $.ajax({
          type: 'GET',
          url: '/articles/searches',
          data: { keyword: input },
          dataType: 'json'
        })
        .done(function(articles) {
          $(".contents.high").empty();
          if (articles.length !== 0) {
            articles.forEach(function(article){
              appendArticle(article);
            });
          } else {
            appendErrMsgToHTML("一致する記事がありません");
          }
        })
      }else {
        $(".contents.high").empty();
      }
    });
  });
});