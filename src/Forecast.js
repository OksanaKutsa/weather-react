import React, { useState } from "react";
import axios from "axios";

export default function Forecast() {
  function formatDay(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return weekDays[day];
  }
}
