import React from "react";

const commentsData = [
  {
    name: "Raju",
    text: "I am first to comment",
  },
  {
    name: "Shyam",
    text: "Very nice video",
    replies: [
      {
        name: "B.Lal",
        text: "Nice",
        replies: [
          {
            name: "Ghanshyaam",
            text: "I will be back",
            replies: [
              {
                name: "Raju",
                text: "Thanks",
                replies: [
                  {
                    name: "Shyam",
                    text: "Superb work",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ram",
    text: "I am amazed by the effort you put in to create these amesome videos",
    replies: [
      {
        name: "Dholu",
        text: "Just chill",
      },
    ],
  },
  {
    name: "Shyam",
    text: "Very great work",
  },
  {
    name: "Billu",
    text: "Keep up the good work",
  },
  {
    name: "Ramesh",
    text: "Keep sharing like and subscribe",
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/128/3033/3033143.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment?.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
