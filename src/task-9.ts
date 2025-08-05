// Створи функцію getArea(shape: Shape): number, яка обчислює площу відповідно до типу фігури.


interface Circle {
    kind: "circle";
    radius: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return 0;
    }
}

console.log(getArea({ kind: 'circle', radius: 10 })); // → 314.15...
console.log(getArea({ kind: 'rectangle', width: 5, height: 10 })); // → 50