import mongoose from "mongoose";

export const dashboard =  {
    "_id": new mongoose.Types.ObjectId().toString(),
    "name": "Platform Launch",
    "columns": [
      {
        "_id": new mongoose.Types.ObjectId().toString(),
        "name": "Todo",
        "tasks": [
          {
            "_id": new mongoose.Types.ObjectId().toString(),
            "title": "Build UI for onboarding flow",
            "description": "",
            "status": "Todo",
            "subtasks": [
              {
                "_id": new mongoose.Types.ObjectId().toString(),
                "title": "Sign up page",
                "isCompleted": true
              }
            ]
          },
          {
            "title": "Build UI for search",
            "description": "",
            "status": "Todo",
            "subtasks": [
              {
                "title": "Search page",
                "isCompleted": false
              }
            ]
          },
        ]
      },
      {
        "_id": new mongoose.Types.ObjectId().toString(),
        "name": "Doing",
        "tasks": [
          {
            "_id": new mongoose.Types.ObjectId().toString(),
            "title": "Design settings and search pages",
            "description": "",
            "status": "Doing",
            "subtasks": [
              {
                "_id": new mongoose.Types.ObjectId().toString(),
                "title": "Settings - Account page",
                "isCompleted": true
              },
            ]
          },
          {
            "_id": new mongoose.Types.ObjectId().toString(),
            "title": "Add account management endpoints",
            "description": "",
            "status": "Doing",
            "subtasks": [
              {
                "_id": new mongoose.Types.ObjectId().toString(),
                "title": "Upgrade plan",
                "isCompleted": true
              },
              {
                "_id": new mongoose.Types.ObjectId().toString(),
                "title": "Cancel plan",
                "isCompleted": true
              },
            ]
          },
        ]
      },
    ]
  };