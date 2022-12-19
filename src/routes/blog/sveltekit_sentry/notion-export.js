const json = {
  "object": "page",
  "id": "d71c3843-29c2-4d69-b0da-f928a2efb3f1",
  "created_time": "2022-12-18T12:42:00.000Z",
  "last_edited_time": "2022-12-19T14:37:00.000Z",
  "created_by": {
    "object": "user",
    "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
  },
  "last_edited_by": {
    "object": "user",
    "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
  },
  "cover": {
    "type": "external",
    "external": {
      "url": "https://www.notion.so/images/page-cover/woodcuts_10.jpg"
    }
  },
  "icon": null,
  "parent": {
    "type": "database_id",
    "database_id": "be65d799-9e98-4426-86a6-72072991e27b"
  },
  "archived": false,
  "properties": {
    "HashTags": {
      "id": "Hhkx",
      "type": "multi_select",
      "multi_select": [
        {
          "id": "bf7e07e6-cb34-424b-849a-78c98a062ea0",
          "name": "개발",
          "color": "default"
        }
      ]
    },
    "생성 일시": {
      "id": "J%7C%3BZ",
      "type": "created_time",
      "created_time": "2022-12-18T12:42:00.000Z"
    },
    "Slug": {
      "id": "S%3A%7B%3E",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "sveltekit_sentry",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "sveltekit_sentry",
          "href": null
        }
      ]
    },
    "Description": {
      "id": "qTV%3E",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "준비중입니다 ㅎ;",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "준비중입니다 ㅎ;",
          "href": null
        }
      ]
    },
    "Status": {
      "id": "vu%7C%3B",
      "type": "select",
      "select": {
        "id": "|QrX",
        "name": "Publishable",
        "color": "green"
      }
    },
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "sveltekit sentry 적용기!",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "sveltekit sentry 적용기!",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/sveltekit-sentry-d71c384329c24d69b0daf928a2efb3f1",
  "blocks": []
}

export async function get({ params }) {
  return {
    body: {
      json
    }
  }
}