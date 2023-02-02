import * as functions from "firebase-functions";
import React from "react";
import { renderToString } from "react-dom/server";
import express from "express";
import fs from "fs";
const app = express();
const index = fs.readFileSync(__dirname + "/index.html", "utf-8");
app.get("**", (req, res) => {
  const html = renderToString(<App initialValue={10} />);
  const renderHtml = index.replace(
    `<div id="root"></div>`,
    `<div id="root">${html}</div>`
  );
  res.set("Cache-Control", "public max-age=600, s-maxage=1200");
  res.send(renderHtml);
});

export let ssrReact = functions.https.onRequest(app);
