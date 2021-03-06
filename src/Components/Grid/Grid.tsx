import React from "react";
import './Grid.scss';

export type GridProps = {
    grid: string[][],
    selectedLetters: string[][]
    disabled: boolean
    onMouseUpHandler: React.MouseEventHandler
    onMouseDownHandler: React.MouseEventHandler
    onMouseEnterHandler: React.MouseEventHandler
}

const Grid: React.FC<GridProps> = ({
    grid,
    selectedLetters,
    disabled,
    onMouseDownHandler,
    onMouseEnterHandler,
    onMouseUpHandler
}) => {
    const isGridDisabled = disabled ? 'disabled' : 'enabled';
    return (
        <div className="gridContainer">
            <div className='grid'>
            {
                grid.map((row, rowNumber) => (
                    <div
                        key={rowNumber + 1}
                        role="row"
                        className={`row ${isGridDisabled}`}
                        onMouseUp={onMouseUpHandler}
                    >
                        {row.map((letter , columnNumber) => {
                            const isSelected = selectedLetters.find((selectedLetter) => {
                                return selectedLetter.join(',') === `${columnNumber},${rowNumber}`;
                            });

                            return (
                                <span
                                    id={`${columnNumber},${rowNumber}`}
                                    className={`letter ${isSelected ? 'selected': 'unselected'} ${isGridDisabled}`}
                                    onMouseDown={onMouseDownHandler}
                                    onMouseEnter={onMouseEnterHandler}
                                    key={columnNumber + 1}
                                >
                                        {letter}
                                </span>
                            );
                        }
                        )}
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Grid;
