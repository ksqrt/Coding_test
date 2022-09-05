from typing import Dict
class Tire:
    __slots__ = ["data","is_end"]
    
    # 초기화 매서드 
    def __init__(self):
        print("새로운 객체입니다")
        self.data : Dict[str,Tire] = {}
        self.is_end : bool = False
    
    
    