import {BigInt, log} from "@graphprotocol/graph-ts"
import {
    vyper,
    Deposit,
    Withdraw,
    Supply
} from "../generated/vyper/vyper"
import {Account} from "../generated/schema"


export function handleDeposit(event: Deposit): void {

    // log.info("#####################Deposit.type: {}", [event.params.type.toString()]);
    if (event.params.type.equals(BigInt.fromI32(1))) {
        log.info("##################### CREATE_LOCK_TYPE", []);
        let account = Account.load(event.params.provider.toHexString())
        if(account === null){
            account = new Account(event.params.provider.toHexString())
            account.address = event.params.provider.toHexString()
            account.createdTimestamp = event.block.timestamp.toString()
            account.totalStaked = event.params.value.toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }else {
            account.totalStaked = BigInt.fromString(account.totalStaked).plus(event.params.value).toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }

    } else if (event.params.type.equals(BigInt.fromI32(2))) {
        log.info("##################### INCREASE_LOCK_AMOUNT", []);
        let account = Account.load(event.params.provider.toHexString())
        if(account === null){
            account = new Account(event.params.provider.toHexString())
            account.address = event.params.provider.toHexString()
            account.createdTimestamp = event.block.timestamp.toString()
            account.totalStaked = event.params.value.toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }else {
            account.totalStaked = BigInt.fromString(account.totalStaked).plus(event.params.value).toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }

    } else if (event.params.type.equals(BigInt.fromI32(3))) {
        log.info("##################### INCREASE_UNLOCK_TIME", []);

        let account = Account.load(event.params.provider.toHexString())
        if(account === null){
            account = new Account(event.params.provider.toHexString())
            account.address = event.params.provider.toHexString()
            account.createdTimestamp = event.block.timestamp.toString()
            account.totalStaked = event.params.value.toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }else {
            account.totalStaked = BigInt.fromString(account.totalStaked).plus(event.params.value).toString()
            account.lockTimestamp = event.params.locktime.toString()
            account.save()
        }

    }

}

export function handleWithdraw(event: Withdraw): void {
}

