// @flow
import React, { Component } from "react";
import styled from "styled-components";
import postscribe from "postscribe";
import PointInfoPanel from "./PointInfoPanel";

const DivMap = styled.div`
  ${({ restHeight }) =>
    restHeight ? `height: calc(100vh - ${restHeight}px)` : "height: 100vh"};
`;

const DivPointInfo = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0px;
  width: 100%;
  background-color: teal;
`;

type Props = {
  restHeight?: number,
  children: any
};
type State = {};

export default class DaumMap extends Component<Props, State> {
  componentDidMount() {
    const daumMapApiKey = "39902ff10f1c465a3b34fb5c2b7e3881";

    const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${daumMapApiKey}&libraries=services`;

    postscribe(window.document.head, `<script src="${url}"></script>`, {
      done: () => {
        if (!window.daum.maps) {
          console.log("daum map load fialed");
        } else {
          console.log("daum map loaded");
          this.initialize();
        }
      }
    });
  }

  initialize() {
    const daum = window.daum;
    // const point = this.state.point;
    // const geocoder = new window.daum.maps.services.Geocoder();
    // // 장소 검색 객체를 생성합니다
    // const ps = new window.daum.maps.services.Places();

    // this.setState({
    //   geocoder: geocoder,
    //   ps: ps,
    //   daum: daum
    // });
    const map = this.initMap(daum);
    // this.displayBounds(daum, map, point);
  }

  initMap(daum: any) {
    let mapContainer = document.getElementById("map"); // 지도를 표시할 div
    let mapOption = {
      center: new daum.maps.LatLng(33.9477725, 126.320011), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
      mapTypeId: window.daum.maps.MapTypeId.HYBRID // 지도종류
    };
    // 지도를 생성한다
    const map = new daum.maps.Map(mapContainer, mapOption);
    //this.setMarkerEvent(map);
    // this.setState({
    //   map: map
    // });

    return map;
  }
  render() {
    const { restHeight, children } = this.props;
    return (
      <DivMap className="map" id="map">
        {children}
      </DivMap>
    );
  }
}
