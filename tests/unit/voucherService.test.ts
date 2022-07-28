import voucherRepository from "../../src/repositories/voucherRepository.js";
import voucherService from "../../src/services/voucherService.js";
import { jest } from "@jest/globals"; 


describe("voucherService test suite", () => {
  it("should be always very positive", () => {
    expect("didi").toBe("didi");
  })
})

describe("create voucher", () => {
  it("should create voucher", async () => {
    const voucher = { id: 1, code: "VCHR123456", discount: 10, used: false };
    jest
      .spyOn(voucherRepository, "getVoucherByCode")
      .mockResolvedValueOnce(null);
    jest
      .spyOn(voucherRepository, "createVoucher")
      .mockResolvedValueOnce(voucher);

    await voucherService.createVoucher(voucher.code, voucher.discount);
    expect(voucherRepository.createVoucher).toBeCalledTimes(1);
  })
})