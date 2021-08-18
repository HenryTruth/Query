import React from "react";
import "./Container.scss";
import SideBar from "../SideBar/SideBar";
import { useSelector } from "react-redux";
// import { changemodes } from "../actions";
// import SideBarSkeletonLoader from "../SKELETONS/SideBarSkeletonLoader/SideBarSkeletonLoader";

export default function Container({ children }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
 // const dispatch = useDispatch();

  return (
    <div
      className="ContainerStyle"
      style={{ background: `${stateToProps.themeColors.background}` }}
    >
      {/* {setTimeout(() => {
        <SideBarSkeletonLoader />;
      }, 3000)} */}
      <SideBar />

      {children}
    </div>
  );
}
