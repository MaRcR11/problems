class Solution:
    def divide(self, dividend: int, divisor: int) -> int:
        if(dividend == -2147483648 and divisor == -1):
            return int(dividend/divisor) -1
        elif(dividend == 2147483648):
            return int(dividend/divisor) -1
        else:
            return int(dividend/divisor)