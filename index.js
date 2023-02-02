import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/app";
import express from "express";
import path from "path";
import fs from "fs";
const app = express();
const index = fs.readFileSync(
  path.resolve(__dirname, "..") + "/public/index.html",
  "utf-8"
);

app.use("^/$", (req, res, next) => {
  const html = `${renderToString(<App />)}`;
  const replacedHTML = index.replace(
    `<div id="root"></div>`,
    `<div id="root">${html}</div>`
  );
  res.set("Cache-Control", "public max-age=600, s-maxage=1200");
  return res.send(replacedHTML);
});

export let ssrReact = functions.https.onRequest(app);
