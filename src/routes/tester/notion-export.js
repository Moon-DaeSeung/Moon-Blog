const json = {
  "object": "page",
  "id": "e8eaf0cc-1347-432b-8230-c0fe12189aca",
  "created_time": "2022-12-10T04:58:00.000Z",
  "last_edited_time": "2022-12-10T06:47:00.000Z",
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
      "url": "https://www.notion.so/images/page-cover/rijksmuseum_vermeer_the_milkmaid.jpg"
    }
  },
  "icon": null,
  "parent": {
    "type": "database_id",
    "database_id": "be65d799-9e98-4426-86a6-72072991e27b"
  },
  "archived": false,
  "properties": {
    "Slug": {
      "id": "S%3A%7B%3E",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "tester",
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
          "plain_text": "tester",
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
        "color": "default"
      }
    },
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "TestTTTTT",
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
          "plain_text": "TestTTTTT",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/TestTTTTT-e8eaf0cc1347432b8230c0fe12189aca",
  "blocks": [
    {
      "object": "block",
      "id": "05a6839a-00e6-4865-8927-fe5bf12a90f3",
      "parent": {
        "type": "page_id",
        "page_id": "e8eaf0cc-1347-432b-8230-c0fe12189aca"
      },
      "created_time": "2022-12-10T05:00:00.000Z",
      "last_edited_time": "2022-12-10T05:39:00.000Z",
      "created_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "last_edited_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "“Hellow World” !!",
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
            "plain_text": "“Hellow World” !!",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "08303518-f90b-41f0-ac59-800b057aa9f6",
      "parent": {
        "type": "page_id",
        "page_id": "e8eaf0cc-1347-432b-8230-c0fe12189aca"
      },
      "created_time": "2022-12-10T06:47:00.000Z",
      "last_edited_time": "2022-12-10T06:47:00.000Z",
      "created_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "last_edited_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "has_children": false,
      "archived": false,
      "type": "paragraph",
      "paragraph": {
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "what is you favorite cms!!",
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
            "plain_text": "what is you favorite cms!!",
            "href": null
          }
        ]
      }
    },
    {
      "object": "block",
      "id": "12890760-9c0b-4d9c-a510-1a1b67725683",
      "parent": {
        "type": "page_id",
        "page_id": "e8eaf0cc-1347-432b-8230-c0fe12189aca"
      },
      "created_time": "2022-12-10T05:37:00.000Z",
      "last_edited_time": "2022-12-10T05:39:00.000Z",
      "created_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "last_edited_by": {
        "object": "user",
        "id": "95fc0174-8fc6-4114-8e45-f67eacd99f07"
      },
      "has_children": false,
      "archived": false,
      "type": "heading_1",
      "heading_1": {
        "is_toggleable": false,
        "color": "default",
        "text": [
          {
            "type": "text",
            "text": {
              "content": "TUTKE",
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
            "plain_text": "TUTKE",
            "href": null
          }
        ]
      }
    }
  ]
}

export async function get({ params }) {
  return {
    body: {
      json
    }
  }
}