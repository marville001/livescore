require("dotenv").config();
const AWS = require("aws-sdk");
const axios = require("axios");

const { IAM_USER_KEY, IAM_USER_SECRET, X_RAPIDAPI_HOST, X_RAPIDAPI_KEY } =
  process.env;

AWS.config.update({
  region: "us-east-2",
  accessKeyId: IAM_USER_KEY,
  secretAccessKey: IAM_USER_SECRET,
});

const docClient = new AWS.DynamoDB.DocumentClient();
const BASE_URL = "https://livescore6.p.rapidapi.com/matches/v2/list-live";
const IMAGE_BASE_URL = "https://lsm-static-prod.livescore.com/medium";
const liveMatches = [];

const getLiveMatchesFromAPI = async () => {
  await axios
    .get(BASE_URL, {
      params: { Category: "soccer" },
      headers: {
        "x-rapidapi-host": X_RAPIDAPI_HOST,
        "x-rapidapi-key": X_RAPIDAPI_KEY,
      },
    })
    .then(({ data: { Stages } }) => {
      for (let i = 0; i < Stages.length; i++) {
        for (let j = 0; j < Stages[i].Events.length; j++) {
          const item = Stages[i].Events[j];
          const matchDetails = {
            _id: item.Eid,
            TeamA: item.T1[0].Nm,
            TeamB: item.T2[0].Nm,
            TeamA_Logo: `${IMAGE_BASE_URL}/${item.T1[0].Img}`,
            TeamB_Logo: `${IMAGE_BASE_URL}/${item.T2[0].Img}`,
            TeamA_Score: item.Tr1,
            TeamB_Score: item.Tr2,
            Stage: Stages[i].Sid,
            Stage_Name: Stages[i].Snm,
            Country: Stages[i].Cnm,
            Time: item.Eps,
          };
          liveMatches.push(matchDetails);
        }
      }
    })
    .catch((error) => error.message);

  return liveMatches;
};

exports.handler = async (event, context) => {
  // const func = async () => {
  await getLiveMatchesFromAPI();

  for (let i = 0; i < liveMatches.length; i++) {
    const params = {
      Item: liveMatches[i],
      TableName: "live-score",
    };
    docClient.put(params, (err, data) => {
      if (err) console.log(err);
      console.log("Success");
    });
  }
};

// func();
