import { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Tabs.scss";

function Tabs() {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">
            Baic Info
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/"  tabindex="-1" aria-disabled="true">
            Files
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/ "  tabindex="-1" aria-disabled="true">
            Mutual Action Plan
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="/"  tabindex="-1" aria-disabled="true">
            Contact
          </a>
        </li>
        <li class="nav-item gap-item"></li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">
            Internl Actions
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Tabs;
