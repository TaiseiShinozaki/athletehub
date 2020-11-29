# アプリケーション名

AthleteHub

# アプリケーション概要

陸上競技を始めたい人や、陸上競技に取り組んでいて、なおかつ身の周りに指導者や仲間がいない人や
運動・陸上経験が少ない中学生や高校生、社会人で競技力を上げたい、運動を通じてよりよい生活を送りたい人向けに交流、意見交換ができるアプリケーションです。

# URL 

後日掲載予定！！

# テスト用アカウント

後日掲載予定！！

# 利用方法

後日掲載予定！！

# 目指した課題解決

このアプリケーションを通じて、自分の競技力を向上させたい！けど身の周りに競技に一緒に取り組める仲間がいない、指導してくれる人がいない、どのような練習計画を組んだら良いのかなどの悩みや課題を解決していきたいです。

# 洗い出した要件

後日掲載予定！！

# 実装した機能についての説明

後日掲載予定！！

# 実装予定の機能

ユーザー登録機能
ログイン・ログアウト機能
質問投稿機能
質問内容一覧機能（トップページ）
質問に対してのコメント機能
ダイレクトメッセージ機能
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