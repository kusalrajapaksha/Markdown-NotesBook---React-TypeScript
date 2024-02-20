export const dummyTags = [
    {
      "id": "2b744372-e3c3-40c8-be33-7ddb3bca4ae7",
      "label": "New"
    },
    {
      "id": "d532be7c-fe89-4079-bb96-c4181bdcea45",
      "label": "Python"
    },
    {
      "id": "5f6bfde8-301f-4531-b1cc-4620b3ed3188",
      "label": "Java"
    },
    {
      "id": "7d1f0fc6-8a2d-4c87-97db-8f750b08128d",
      "label": "Swift "
    },
    {
      "id": "d1ce3d26-5157-450c-b85a-c961f10a2010",
      "label": "Go"
    },
    {
      "id": "302cb9b3-1826-45e6-bd2f-6006dabb718a",
      "label": "Link"
    },
    {
      "id": "43ec5487-1ac3-4893-8d2f-c2943d35655c",
      "label": "Image"
    },
    {
      "id": "8ef63258-e559-4088-8d3c-0f6b8cdacbac",
      "label": "Web"
    },
    {
      "id": "3cdce792-923c-4213-bcc8-040f4d88f763",
      "label": "Table"
    },
    {
      "id": "b64eded5-0751-4ad4-aa94-441df02552a2",
      "label": "Row"
    },
    {
      "id": "1d4ce684-a06d-45c0-99f0-092c1d7bdb35",
      "label": "Column"
    },
    {
      "id": "45dd075e-e69c-4a89-bdf1-b489acf5132a",
      "label": "Code"
    },
    {
      "id": "0357dc7d-d3c9-42fe-add7-bb2aa70a19c8",
      "label": "Block"
    }
  ]

export const dummyNotes = [
    {
      "title": "Headers",
      "markdown": "# Header 1\n## Header 2\n### Header 3\n#### Header 4\n##### Header 5\n###### Header 6",
      "id": "718a02bd-bdbc-4229-a893-0501216d0bdb",
      "tagIds": [
        "d532be7c-fe89-4079-bb96-c4181bdcea45"
      ]
    },
    {
      "title": "Emphasis (Italic and Bold)",
      "markdown": "*Italic Text*\n\n**Bold Text**\n\n***Bold and Italic Text***",
      "id": "6c79fb9f-0860-4fbc-b739-513a0e0877a3",
      "tagIds": [
        "d532be7c-fe89-4079-bb96-c4181bdcea45",
        "5f6bfde8-301f-4531-b1cc-4620b3ed3188"
      ]
    },
    {
      "title": "Lists",
      "markdown": "- Unordered Item 1\n- Unordered Item 2\n  - Nested Item 1\n  - Nested Item 2\n\n1. Ordered Item 1\n2. Ordered Item 2\n   1. Nested Item 1\n   2. Nested Item 2",
      "id": "86711620-dca1-4b38-ba26-cc623479f276",
      "tagIds": [
        "7d1f0fc6-8a2d-4c87-97db-8f750b08128d",
        "d1ce3d26-5157-450c-b85a-c961f10a2010"
      ]
    },
    {
      "title": "Links and Images",
      "markdown": "[Link Text](https://www.example.com)\n\n![Image Alt Text](https://picsum.photos/200)",
      "id": "260082d4-573c-4355-b1ba-ddc22de3e461",
      "tagIds": [
        "302cb9b3-1826-45e6-bd2f-6006dabb718a",
        "43ec5487-1ac3-4893-8d2f-c2943d35655c",
        "8ef63258-e559-4088-8d3c-0f6b8cdacbac"
      ]
    },
    {
      "title": "Tables",
      "markdown": "| Header 1 | Header 2 |\n|----------|----------|\n| Row 1    | Row 1    |\n| Row 2    | Row 2    |",
      "id": "b8771b6b-a2da-4a0b-ab1d-5646d3aa95b3",
      "tagIds": [
        "3cdce792-923c-4213-bcc8-040f4d88f763",
        "b64eded5-0751-4ad4-aa94-441df02552a2",
        "1d4ce684-a06d-45c0-99f0-092c1d7bdb35"
      ]
    },
    {
      "title": "Code Blocks",
      "markdown": "* Inline `code` can be represented with backticks.\n\n* Block codes can be represented with thripple backticks.\n\n```\nimport { useEffect, useState } from \"react\";\n\nexport function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {\n    const [value, setValue] = useState<T>(()=>{\n        const jsonValue = localStorage.getItem(key)\n        \n        if(jsonValue == null){\n            if(typeof initialValue  === 'function'){\n                return (initialValue as ()=>T)()\n            }else{\n                return initialValue\n            }\n        }else{\n            return JSON.parse(jsonValue)\n        }\n\n    })\n\n    useEffect(() => {\n        localStorage.setItem(key, JSON.stringify(value))\n    },[value, key])\n\n    return [value, setValue] as [T, typeof setValue]\n}\n```",
      "id": "60dfeb7e-62c8-4805-94b4-772ba3b0a45e",
      "tagIds": [
        "45dd075e-e69c-4a89-bdf1-b489acf5132a",
        "0357dc7d-d3c9-42fe-add7-bb2aa70a19c8"
      ]
    }
  ]