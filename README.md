# アプリケーション名

AthleteHub

# アプリケーション概要

運動やスポーツに関する悩みや疑問などを投稿できるwebアプリケーションです。

# 使用言語

Ruby , Ruby on Rails
*使用理由に関しては僕が最初に学んだプログラミング言語であり、親しみがあったため。

# URL 

https://athletehub.herokuapp.com/

# テスト用アカウント

ユーザーネーム : testuser1
メールアドレス : testuser1@gmail.com
パスワード : test10

# 利用方法

basic認証については
ユーザー名は sushi
パスワードは 1111 で入力してください。

# 目指した課題解決

このアプリケーションを通じて、運動が苦手な人の悩みや課題を解決していきたいです。

# 実装した機能についての説明

ユーザー登録機能
ログイン・ログアウト機能
質問投稿機能
質問内容一覧機能（トップページ）
質問に対してのコメント機能

# 実装予定の機能

JavaScriptを用いてスタイリッシュなデザインに仕上げていきたいです。
投稿へのいいね
チャット機能
動画投稿機能

# テーブル設計

## users テーブル

| Column            | Type   | Options                           |
| ----------------- | ------ | --------------------------------- |
| username          | string | null: false, uniqueness:true      |
| email             | string | null: false, uniqueness:true      |
| password          | string | null: false, uniqueness:true      |

## chat テーブル

| Column | Type   | Options     |
| ------ | ------ | ----------- |
| name   | string | null: false |

## chat_users テーブル

| Column | Type       | Options                        |
| ------ | ---------- | ------------------------------ |
| chat   | references | null: false, foreign_key: true |
| user   | references | null: false, foreign_key: true |

## contents テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| title   | string     | null: false                    |
| text    | string     | null: false                    |
| user    | references | null: false, foreign_key: true |

## comments テーブル

| Column  | Type       | Options                        |
| ------- | ---------- | ------------------------------ |
| user    | references | null: false, foreign_key: true |
| content | references | null: false, foreign_key: true |
| text    | string     | null: false                    |


# 動作環境

Ruby on Rails 6.0.0
