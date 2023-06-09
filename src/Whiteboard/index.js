/*eslint-disable */
import "./styles.css";
import InitialData from "./initialData";
import React, { useEffect, useState, useRef } from "react";
import { Button, Excalidraw } from "@excalidraw/excalidraw";

const Whiteboard = () => {
    const excalidrawRef = useRef(null);
    const excalidrawWrapperRef = useRef(null);
    const [dimensions, setDimensions] = useState({
        width: undefined,
        height: undefined
    });

    const [viewModeEnabled, setViewModeEnabled] = useState(false);
    const [zenModeEnabled, setZenModeEnabled] = useState(false);
    const [gridModeEnabled, setGridModeEnabled] = useState(false);

    useEffect(() => {
        setDimensions({
            width: excalidrawWrapperRef.current.getBoundingClientRect().width,
            height: excalidrawWrapperRef.current.getBoundingClientRect().height
        });
        const onResize = () => {
            setDimensions({
                width: excalidrawWrapperRef.current.getBoundingClientRect().width,
                height: excalidrawWrapperRef.current.getBoundingClientRect().height
            });
        };

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, [excalidrawWrapperRef]);

    const updateScene = () => {
        const sceneData = {
            elements: [
                {
                    type: "rectangle",
                    version: 141,
                    versionNonce: 361174001,
                    isDeleted: false,
                    id: "oDVXy8D6rom3H1-LLH2-f",
                    fillStyle: "hachure",
                    strokeWidth: 1,
                    strokeStyle: "solid",
                    roughness: 1,
                    opacity: 100,
                    angle: 0,
                    x: 100.50390625,
                    y: 93.67578125,
                    strokeColor: "#c92a2a",
                    backgroundColor: "transparent",
                    width: 186.47265625,
                    height: 141.9765625,
                    seed: 1968410350,
                    groupIds: []
                }
            ],
            appState: {
                viewBackgroundColor: "#edf2ff"
            }
        };
        console.log(excalidrawRef, "hello");
        excalidrawRef.current.updateScene(sceneData);
    };

    return (<div>
        <h3>This is the begin of Whiteboard index</h3>
        <div className="button-wrapper">
            <Button
                className="update-scene"
                onClick={updateScene}
            >
                Update Scene
            </Button>
            <Button
                className="reset-scene"
                onClick={() => excalidrawRef.current.resetScene()}
            >
                Reset Scene
            </Button>
            <label>
                <input
                    type="checkbox"
                    checked={viewModeEnabled}
                    onChange={() => setViewModeEnabled(!viewModeEnabled)}
                />
                View mode
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={zenModeEnabled}
                    onChange={() => setZenModeEnabled(!zenModeEnabled)}
                />
                Zen mode
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={gridModeEnabled}
                    onChange={() => setGridModeEnabled(!gridModeEnabled)}
                />
                Grid mode
            </label>
        </div>
        <div className="excalidraw-wrapper" ref={excalidrawWrapperRef}>
            <Excalidraw
                ref={excalidrawRef}
                initialData={InitialData}
                viewModeEnabled={viewModeEnabled}
                zenModeEnabled={zenModeEnabled}
                gridModeEnabled={gridModeEnabled}
            />
        </div>
    </div>);
};

// const excalidrawWrapper = document.getElementById("Whiteboard");
// const root = ReactDOM.createRoot(excalidrawWrapper);
// root.render(React.createElement(Whiteboard));
export default Whiteboard;