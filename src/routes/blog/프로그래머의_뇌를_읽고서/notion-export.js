const json = {
  "object": "page",
  "id": "1124ebcc-0e55-431f-bd22-a11702c0fdb4",
  "created_time": "2022-12-19T14:34:00.000Z",
  "last_edited_time": "2022-12-19T14:36:00.000Z",
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
      "url": "https://www.notion.so/images/page-cover/met_silk_kashan_carpet.jpg"
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
          "id": "qO\\]",
          "name": "서평",
          "color": "purple"
        }
      ]
    },
    "생성 일시": {
      "id": "J%7C%3BZ",
      "type": "created_time",
      "created_time": "2022-12-19T14:34:00.000Z"
    },
    "Slug": {
      "id": "S%3A%7B%3E",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "프로그래머의_뇌를_읽고서",
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
          "plain_text": "프로그래머의_뇌를_읽고서",
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
            "content": "아직 안읽었습니다 ㅎㅎ ;;",
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
          "plain_text": "아직 안읽었습니다 ㅎㅎ ;;",
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
            "content": "프로그래머의 뇌를 읽고서",
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
          "plain_text": "프로그래머의 뇌를 읽고서",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/1124ebcc0e55431fbd22a11702c0fdb4",
  "blocks": [
    {
      "object": "block",
      "id": "8bb02612-5b9e-410b-ab19-f3b50918c0a8",
      "parent": {
        "type": "page_id",
        "page_id": "1124ebcc-0e55-431f-bd22-a11702c0fdb4"
      },
      "created_time": "2022-12-19T14:36:00.000Z",
      "last_edited_time": "2022-12-19T14:36:00.000Z",
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
              "content": "레이아웃 디자인만 보려고 임시로 만듬",
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
            "plain_text": "레이아웃 디자인만 보려고 임시로 만듬",
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