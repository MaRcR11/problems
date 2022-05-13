import math
class Solution(object):
    def isNumber(self, s):
        """
        :type s: str
        :rtype: bool
        """
        try:
            if(s !=  "inf" and s != "-inf" and s != "+inf" and s != "Infinity"  and s != "-Infinity"  and s != "+Infinity"):
                print(type(s))
                num = float(s)
                x = math.isnan(num)
                return not x
        except ValueError:
            return False