import React from 'react'

export const Audio = ({ width = 55, height = 80, fill = '#fff'}) => (
  <svg width={width} height={height} viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill={fill}>
      <g transform="matrix(1 0 0 -1 0 80)">
          <rect width="10" height="20" rx="3">
              <animate attributeName="height"
                   begin="0s" dur="4.3s"
                   values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                   repeatCount="indefinite" />
          </rect>
          <rect x="15" width="10" height="80" rx="3">
              <animate attributeName="height"
                   begin="0s" dur="2s"
                   values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                   repeatCount="indefinite" />
          </rect>
          <rect x="30" width="10" height="50" rx="3">
              <animate attributeName="height"
                   begin="0s" dur="1.4s"
                   values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                   repeatCount="indefinite" />
          </rect>
          <rect x="45" width="10" height="30" rx="3">
              <animate attributeName="height"
                   begin="0s" dur="2s"
                   values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                   repeatCount="indefinite" />
          </rect>
      </g>
  </svg>
);

export const BallTriangle = ({ width = 57, height = 57, fill = '#fff'}) => (
  <svg width={width} height={height} viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke={fill}>
      <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)" stroke-width="2">
              <circle cx="5" cy="50" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       values="50;5;50;50"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       begin="0s" dur="2.2s"
                       values="5;27;49;5"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="27" cy="5" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       from="5" to="5"
                       values="5;50;50;5"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       begin="0s" dur="2.2s"
                       from="27" to="27"
                       values="27;49;5;27"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
              <circle cx="49" cy="50" r="5">
                  <animate attributeName="cy"
                       begin="0s" dur="2.2s"
                       values="50;50;5;50"
                       calcMode="linear"
                       repeatCount="indefinite" />
                  <animate attributeName="cx"
                       from="49" to="49"
                       begin="0s" dur="2.2s"
                       values="49;5;27;49"
                       calcMode="linear"
                       repeatCount="indefinite" />
              </circle>
          </g>
      </g>
  </svg>
);

export const Bars = ({ width = 135, height = 140, fill = '#fff' }) => (
  <svg width={width} height={height} viewBox="0 0 135 140" xmlns="http://www.w3.org/2000/svg" fill={fill}>
      <rect y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.5s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.5s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="30" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.25s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.25s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="60" width="15" height="140" rx="6">
          <animate attributeName="height"
               begin="0s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="90" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.25s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.25s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
      <rect x="120" y="10" width="15" height="120" rx="6">
          <animate attributeName="height"
               begin="0.5s" dur="1s"
               values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear"
               repeatCount="indefinite" />
          <animate attributeName="y"
               begin="0.5s" dur="1s"
               values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear"
               repeatCount="indefinite" />
      </rect>
  </svg>
);
