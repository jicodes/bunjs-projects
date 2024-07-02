import { Hono } from "hono";

export type Env = {
    MY_VAR: string;
};

const app = new Hono<{ Bindings: Env }>();

app.get("/", (c) => {
    return c.text("Hello Hono!");
});

export default app;
