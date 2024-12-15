import { httpStatusCode } from "../util/Util";
export class HttpException {
  constructor(
    public code: number,
    public message: string = httpStatusCode(code)
  ) {}
}
