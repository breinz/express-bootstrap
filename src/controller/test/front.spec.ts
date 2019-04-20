import FrontController from "../front"

describe("frontController", () => {

    describe("index", () => {

        test("should render index", () => {

            const req: any = {};

            const res: any = {
                render: jest.fn()
            }

            const frontController = new FrontController();

            frontController.index(req, res);

            expect(res.render).toHaveBeenCalled();
            expect(res.render).toHaveBeenCalledWith("index");
        })

    })

})