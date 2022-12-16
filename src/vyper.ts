import {BigInt, log} from "@graphprotocol/graph-ts"
import {
    vyper,
    Deposit,
    Withdraw,
    Supply
} from "../generated/vyper/vyper"
import {Account} from "../generated/schema"


export function handleDeposit(event: Deposit): void {

    log.info("#####################Deposit.type: {}", [event.params.type.toString()]);
    if (event.params.type.equals(BigInt.fromI32(1))) {
        log.info("#####################Deposit.type: 1", []);
    } else if (event.params.type.equals(BigInt.fromI32(2))) {
        log.info("#####################Deposit.type: 2", []);
    } else if (event.params.type.equals(BigInt.fromI32(3))) {
        log.info("#####################Deposit.type: 2", []);
    }

}

export function handleWithdraw(event: Withdraw): void {
}

