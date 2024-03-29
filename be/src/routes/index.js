import userRouter from "./user.js";
import authRouter from './auth.js';
import productRouter from './product.js';
import feedbackRouter from './feedback.js';
import brandRouter from './brand.js';
import categoryRouter from './category.js';

const route = (app) => {
    app.use("/users", userRouter);
    app.use("/products", productRouter);
    app.use("/feedbacks", feedbackRouter);
    app.use("/auth", authRouter);
    app.use("/brands", brandRouter);
    app.use("/categories", categoryRouter);
}

export default route;