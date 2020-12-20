import { StatusBar } from "expo-status-bar";
import React from "react";
import Route from "./navigation/Route";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Route />
    </>
  );
}
