# アプリ名 mono-space

# 説明
 画像file投稿　URLを使った画像投稿　YouTubeのURLを使った動画投稿

# 使い方
右上の新規登録、ログインからセッションを開始後、右上に投稿するボタンが表示される<br>
<img src="https://i.gyazo.com/27af9d155957da4cc6662ec181d6e019.png" width="300px"><br>
投稿画面ではYouTube、imagefile、imageURLから１つ選択してもらいどれか１つのみ投稿できる<br>
<img src="https://i.gyazo.com/41e7102b122838d294833b6ad790c692.png" width="300px"><br>
textの入力は必須です。入力が無い場合は投稿できません。

# 実装機能一覧
・投稿機能
youtube,imagefile.imageURLの３つの中から選択して投稿
・ユーザー登録、ログイン機能
deviseでのメールアドレス、パスワードにニックネームを追加したユーザー登録
・検索機能
通常のテキストを参照した検索機能とインクリメンタルサーチを使った安易検索
・自動更新機能
トップページに限り、リアルタイムに記事が更新されるようにした。
・コメント機能
記事にコメントを残せるようにした、またAjaxを用いた非同期通信での実装

# 構築
ruby 2.6.3<br>
rails 5.2.3<br>
mySQL 

