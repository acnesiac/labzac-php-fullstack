{
	"info": {
		"_postman_id": "0574ad8a-a525-43ae-8e1e-5fd9756037f4",
		"name": "Conduit",
		"description": "Collection for testing the Conduit API\n\nhttps://github.com/gothinkster/realworld",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "Auth",
			"item": [
				{
					"name": "Register",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"{{EMAIL}}\", \"password\":\"{{PASSWORD}}\", \"username\":\"{{USERNAME}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/users",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"users"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"{{EMAIL}}\", \"password\":\"{{PASSWORD}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/users/login",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Login and Remember Token",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "a7674032-bf09-4ae7-8224-4afa2fb1a9f9",
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									"",
									"if(tests['User has \"token\" property']){",
									"    pm.globals.set('token', user.token);",
									"}",
									"",
									"tests['Global variable \"token\" has been set'] = pm.globals.get('token') === user.token;",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"{{EMAIL}}\", \"password\":\"{{PASSWORD}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/users/login",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"users",
								"login"
							]
						}
					},
					"response": []
				},
				{
					"name": "Current User",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/user",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"user"
							]
						}
					},
					"response": []
				},
				{
					"name": "Update User",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									""
								]
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"{{EMAIL}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/user",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"user"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Articles",
			"item": [
				{
					"name": "All Articles",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles by Author",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?author=johnjacob",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "author",
									"value": "johnjacob"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles Favorited by Username",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"    ",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?favorited=jane",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "favorited",
									"value": "jane"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles by Tag",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?tag=dragons",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "tag",
									"value": "dragons"
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Articles, Favorite, Comments",
			"item": [
				{
					"name": "Create Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "e711dbf8-8065-4ba8-8b74-f1639a7d8208",
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"article\" property'] = responseJSON.hasOwnProperty('article');",
									"",
									"var article = responseJSON.article || {};",
									"",
									"tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"pm.globals.set('slug', article.slug);",
									"",
									"tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"article\":{\"title\":\"How to train your dragon\", \"description\":\"Ever wonder how?\", \"body\":\"Very carefully.\", \"tagList\":[\"dragons\",\"training\"]}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							]
						}
					},
					"response": []
				},
				{
					"name": "Feed",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/feed",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"feed"
							]
						}
					},
					"response": []
				},
				{
					"name": "All Articles",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							]
						}
					},
					"response": []
				},
				{
					"name": "All Articles with auth",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles by Author",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?author={{USERNAME}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "author",
									"value": "{{USERNAME}}"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles by Author with auth",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?author={{USERNAME}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "author",
									"value": "{{USERNAME}}"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles Favorited by Username",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"    ",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?favorited=jane",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "favorited",
									"value": "jane"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles Favorited by Username with auth",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"    ",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?favorited=jane",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "favorited",
									"value": "jane"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Single Article by slug",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"article\" property'] = responseJSON.hasOwnProperty('article');",
									"",
									"var article = responseJSON.article || {};",
									"",
									"tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "Articles by Tag",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"articles\" property'] = responseJSON.hasOwnProperty('articles');",
									"    tests['Response contains \"articlesCount\" property'] = responseJSON.hasOwnProperty('articlesCount');",
									"    tests['articlesCount is an integer'] = Number.isInteger(responseJSON.articlesCount);",
									"",
									"    if(responseJSON.articles.length){",
									"        var article = responseJSON.articles[0];",
									"",
									"        tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"        tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"        tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"        tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"        tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"        tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"        tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"        tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"        tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"        tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"        tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"        tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"        tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"        tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"    } else {",
									"        tests['articlesCount is 0 when feed is empty'] = responseJSON.articlesCount === 0;",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles?tag=dragons",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles"
							],
							"query": [
								{
									"key": "tag",
									"value": "dragons"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "Update Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"article\" property'] = responseJSON.hasOwnProperty('article');",
									"",
									"var article = responseJSON.article || {};",
									"",
									"tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"article\":{\"body\":\"With two hands\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "Favorite Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"article\" property'] = responseJSON.hasOwnProperty('article');",
									"",
									"var article = responseJSON.article || {};",
									"",
									"tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"tests[\"Article's 'favorited' property is true\"] = article.favorited === true;",
									"tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"tests[\"Article's 'favoritesCount' property is greater than 0\"] = article.favoritesCount > 0;",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}/favorite",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}",
								"favorite"
							]
						}
					},
					"response": []
				},
				{
					"name": "Unfavorite Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"article\" property'] = responseJSON.hasOwnProperty('article');",
									"",
									"var article = responseJSON.article || {};",
									"",
									"tests['Article has \"title\" property'] = article.hasOwnProperty('title');",
									"tests['Article has \"slug\" property'] = article.hasOwnProperty('slug');",
									"tests['Article has \"body\" property'] = article.hasOwnProperty('body');",
									"tests['Article has \"createdAt\" property'] = article.hasOwnProperty('createdAt');",
									"tests['Article\\'s \"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.createdAt);",
									"tests['Article has \"updatedAt\" property'] = article.hasOwnProperty('updatedAt');",
									"tests['Article\\'s \"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(article.updatedAt);",
									"tests['Article has \"description\" property'] = article.hasOwnProperty('description');",
									"tests['Article has \"tagList\" property'] = article.hasOwnProperty('tagList');",
									"tests['Article\\'s \"tagList\" property is an Array'] = Array.isArray(article.tagList);",
									"tests['Article has \"author\" property'] = article.hasOwnProperty('author');",
									"tests['Article has \"favorited\" property'] = article.hasOwnProperty('favorited');",
									"tests['Article has \"favoritesCount\" property'] = article.hasOwnProperty('favoritesCount');",
									"tests['favoritesCount is an integer'] = Number.isInteger(article.favoritesCount);",
									"tests[\"Article's \\\"favorited\\\" property is false\"] = article.favorited === false;",
									""
								]
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}/favorite",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}",
								"favorite"
							]
						}
					},
					"response": []
				},
				{
					"name": "Create Comment for Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"id": "9f90c364-cc68-4728-961a-85eb00197d7b",
								"type": "text/javascript",
								"exec": [
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"comment\" property'] = responseJSON.hasOwnProperty('comment');",
									"",
									"var comment = responseJSON.comment || {};",
									"",
									"tests['Comment has \"id\" property'] = comment.hasOwnProperty('id');",
									"pm.globals.set('commentId', comment.id);",
									"",
									"tests['Comment has \"body\" property'] = comment.hasOwnProperty('body');",
									"tests['Comment has \"createdAt\" property'] = comment.hasOwnProperty('createdAt');",
									"tests['\"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(comment.createdAt);",
									"tests['Comment has \"updatedAt\" property'] = comment.hasOwnProperty('updatedAt');",
									"tests['\"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(comment.updatedAt);",
									"tests['Comment has \"author\" property'] = comment.hasOwnProperty('author');",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"comment\":{\"body\":\"Thank you so much!\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}/comments",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}",
								"comments"
							]
						}
					},
					"response": []
				},
				{
					"name": "All Comments for Article",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"comments\" property'] = responseJSON.hasOwnProperty('comments');",
									"",
									"    if(responseJSON.comments.length){",
									"        var comment = responseJSON.comments[0];",
									"",
									"        tests['Comment has \"id\" property'] = comment.hasOwnProperty('id');",
									"        tests['Comment has \"body\" property'] = comment.hasOwnProperty('body');",
									"        tests['Comment has \"createdAt\" property'] = comment.hasOwnProperty('createdAt');",
									"        tests['\"createdAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(comment.createdAt);",
									"        tests['Comment has \"updatedAt\" property'] = comment.hasOwnProperty('updatedAt');",
									"        tests['\"updatedAt\" property is an ISO 8601 timestamp'] = /^\\d{4,}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d.\\d+(?:[+-][0-2]\\d:[0-5]\\d|Z)$/.test(comment.updatedAt);",
									"        tests['Comment has \"author\" property'] = comment.hasOwnProperty('author');",
									"    }",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}/comments",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}",
								"comments"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Comment for Article",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}/comments/{{commentId}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}",
								"comments",
								"{{commentId}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "Delete Article",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/articles/{{slug}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"articles",
								"{{slug}}"
							]
						}
					},
					"response": []
				}
			],
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"id": "67853a4a-e972-4573-a295-dad12a46a9d7",
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"id": "3057f989-15e4-484e-b8fa-a041043d0ac0",
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		},
		{
			"name": "Profiles",
			"item": [
				{
					"name": "Register Celeb",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var responseJSON = JSON.parse(responseBody);",
									"",
									"tests['Response contains \"user\" property'] = responseJSON.hasOwnProperty('user');",
									"",
									"var user = responseJSON.user || {};",
									"",
									"tests['User has \"email\" property'] = user.hasOwnProperty('email');",
									"tests['User has \"username\" property'] = user.hasOwnProperty('username');",
									"tests['User has \"bio\" property'] = user.hasOwnProperty('bio');",
									"tests['User has \"image\" property'] = user.hasOwnProperty('image');",
									"tests['User has \"token\" property'] = user.hasOwnProperty('token');",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"celeb_{{EMAIL}}\", \"password\":\"{{PASSWORD}}\", \"username\":\"celeb_{{USERNAME}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/users",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"users"
							]
						}
					},
					"response": []
				},
				{
					"name": "Profile",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"profile\" property'] = responseJSON.hasOwnProperty('profile');",
									"    ",
									"    var profile = responseJSON.profile || {};",
									"    ",
									"    tests['Profile has \"username\" property'] = profile.hasOwnProperty('username');",
									"    tests['Profile has \"bio\" property'] = profile.hasOwnProperty('bio');",
									"    tests['Profile has \"image\" property'] = profile.hasOwnProperty('image');",
									"    tests['Profile has \"following\" property'] = profile.hasOwnProperty('following');",
									"}",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/profiles/celeb_{{USERNAME}}",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"profiles",
								"celeb_{{USERNAME}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "Follow Profile",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"profile\" property'] = responseJSON.hasOwnProperty('profile');",
									"    ",
									"    var profile = responseJSON.profile || {};",
									"    ",
									"    tests['Profile has \"username\" property'] = profile.hasOwnProperty('username');",
									"    tests['Profile has \"bio\" property'] = profile.hasOwnProperty('bio');",
									"    tests['Profile has \"image\" property'] = profile.hasOwnProperty('image');",
									"    tests['Profile has \"following\" property'] = profile.hasOwnProperty('following');",
									"    tests['Profile\\'s \"following\" property is true'] = profile.following === true;",
									"}",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\"user\":{\"email\":\"{{EMAIL}}\"}}"
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/profiles/celeb_{{USERNAME}}/follow",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"profiles",
								"celeb_{{USERNAME}}",
								"follow"
							]
						}
					},
					"response": []
				},
				{
					"name": "Unfollow Profile",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"if (!(environment.isIntegrationTest)) {",
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"",
									"    tests['Response contains \"profile\" property'] = responseJSON.hasOwnProperty('profile');",
									"    ",
									"    var profile = responseJSON.profile || {};",
									"    ",
									"    tests['Profile has \"username\" property'] = profile.hasOwnProperty('username');",
									"    tests['Profile has \"bio\" property'] = profile.hasOwnProperty('bio');",
									"    tests['Profile has \"image\" property'] = profile.hasOwnProperty('image');",
									"    tests['Profile has \"following\" property'] = profile.hasOwnProperty('following');",
									"    tests['Profile\\'s \"following\" property is false'] = profile.following === false;",
									"}",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							},
							{
								"key": "Authorization",
								"value": "Token {{token}}"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/profiles/celeb_{{USERNAME}}/follow",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"profiles",
								"celeb_{{USERNAME}}",
								"follow"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Tags",
			"item": [
				{
					"name": "All Tags",
					"event": [
						{
							"listen": "test",
							"script": {
								"type": "text/javascript",
								"exec": [
									"var is200Response = responseCode.code === 200;",
									"",
									"tests['Response code is 200 OK'] = is200Response;",
									"",
									"if(is200Response){",
									"    var responseJSON = JSON.parse(responseBody);",
									"    ",
									"    tests['Response contains \"tags\" property'] = responseJSON.hasOwnProperty('tags');",
									"    tests['\"tags\" property returned as array'] = Array.isArray(responseJSON.tags);",
									"}",
									""
								]
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/json"
							},
							{
								"key": "X-Requested-With",
								"value": "XMLHttpRequest"
							}
						],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://localhost/imagenesrx/public/api/tags",
							"host": [
								"http://localhost/imagenesrx/public/api"
							],
							"path": [
								"tags"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}