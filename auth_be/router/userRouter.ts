import { Router } from "express";
import {
  checkAccount,
  createAccount,
  signInAccount,
  verifyAccount,
  viewAllAccount,
  viewOneAccount,
} from "../controller/userController";

const router: Router = Router();

router.route("/create-account").post(createAccount);
router.route("/sign-in-account").post(signInAccount);
router.route("/check-account").post(checkAccount);

router.route("/verify-account/:userID").patch(verifyAccount);

router.route("/veiw-account/:userID").get(viewOneAccount);
router.route("/veiw-all-account").get(viewAllAccount);

export default router;
