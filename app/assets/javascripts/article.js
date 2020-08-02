$(document).on('turbolinks:load', function() {
  $(function() {
    function buildHTML(article){
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

      var html = `<div class="article-z" data-article-id = "${article.id}">
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
      return html;
    }
          
    if (location.pathname.match()){ 
      setInterval(update, 5000);
    }

    function update(){
      if($('.article-z')[0]){ 
        var article_id = $('.article-z').data('article-id');
        $.ajax({
          url: location.href, //urlは現在のページを指定
          type: 'GET', //アクション名指定（データを表示させる）
          data: { id: article_id }, //rails に引き渡すデータ(これがparams[:id]になる)
          dataType: 'json'
        })
        .done(function(data){
          if (data.length){ //もしdataに値があったら
            $.each(data, function(i, data){ //'data'を'data'に代入してeachで回す
              var html = buildHTML(data);
              $('.contents.row').prepend(html);
            })
          }
        })
        .fail(function(){ //そんなにこの記述はいらない気がするけど、異常系のエラー（途中で通信が中断されたり）が起きた時用
          //alert('自動更新に失敗しました')
        });
      }
      else {
        clearInterval(); //値がなかったらsetIntervalを止める（この記述はなくても動く、別画面に遷移した際は、ブラウザを閉じた時同様、遷移した時点で遷移前のJavaScript実行は勝手に打ち切られる模様）
      }
    }
  });
});