import TableBody from "@mui/material/TableBody";
import * as React from "react";

export type StartProps = {
    progress: ProgressProps,
    quizz: QuizzProps,
    player: PlayerProps
};

export type ProgressProps = {
    current: number
    total: number;
};

export type NavigationArrowProps = {
    className: string;
}

export type QuizzProps = {
    optionsList: string[]
    answerIdx: number;
}

export type PlayerProps = {
    audioUrl: string
}