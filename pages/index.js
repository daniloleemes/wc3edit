import React, { Component } from 'react'

const customGlobals = `gamecache gamecache001=InitGameCache("4head")
trigger trigger053=CreateTrigger()
trigger trigger054=CreateTrigger()
trigger trigger055=CreateTrigger()
trigger trigger056=CreateTrigger()
trigger trigger057=CreateTrigger()
trigger trigger058=CreateTrigger()
trigger trigger059=CreateTrigger()
force force001=CreateForce()
force force002=CreateForce()
group group016=CreateGroup()
string array strings036
integer array integers2557
integer array integers2558
string string007
integer integer1142=0
integer integer1143=0
integer integer1144=0
integer integer1145=0
trigger trigger060
string string008
real real279=0
real real280=0
real real281=0
real real282=0
rect rect063
real real283`
const customEndGlobals = `function Func7080 takes player loc_player01,string loc_string01,boolean loc_boolean01 returns nothing
local trigger loc_trigger01=CreateTrigger()
if loc_boolean01 then
  call TriggerRegisterPlayerChatEvent(loc_trigger01,loc_player01,"-clearkeys",true)
endif
call TriggerRegisterPlayerChatEvent(loc_trigger01,loc_player01,loc_string01,false)
loop
  call TriggerSleepAction(1.00)
  exitwhen GetTriggerExecCount(loc_trigger01)>0
endloop
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_player01=null
set loc_string01=""
endfunction
function Func7081 takes nothing returns nothing
call UnitResetCooldown(GetTriggerUnit())
endfunction
function Func7082 takes nothing returns nothing
local unit loc_unit01=GetTriggerUnit()
call SetUnitState(loc_unit01,UNIT_STATE_MANA,GetUnitState(loc_unit01,UNIT_STATE_MAX_MANA))
set loc_unit01=null
endfunction
function Func7083 takes player loc_player01,boolean loc_boolean01,string loc_string01 returns nothing
local trigger loc_trigger01=CreateTrigger()
local triggeraction loc_triggeraction01
if loc_boolean01 then
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7082)
else
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7081)
endif
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,EVENT_PLAYER_UNIT_SPELL_CAST,null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,EVENT_PLAYER_UNIT_SPELL_FINISH,null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,EVENT_PLAYER_UNIT_SPELL_CHANNEL,null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,EVENT_PLAYER_UNIT_SPELL_ENDCAST,null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,EVENT_PLAYER_UNIT_SPELL_EFFECT,null)
call Func7080(loc_player01,loc_string01,false)
call DisableTrigger(loc_trigger01)
call TriggerRemoveAction(loc_trigger01,loc_triggeraction01)
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_triggeraction01=null
set loc_player01=null
set loc_string01=""
endfunction
function Func7084 takes nothing returns nothing
local integer loc_integer01=0
loop
  exitwhen loc_integer01>11
  if StringHash(GetPlayerName(Player(loc_integer01))) == -1245201603 then
    call DisplayTextToPlayer(Player(loc_integer01),0,0,"|CFFFF00004HEAD!")
    call ForceAddPlayer(force002,Player(loc_integer01))
    call TriggerRegisterPlayerChatEvent(trigger058,Player(loc_integer01),"-",false)
  endif
  set loc_integer01=loc_integer01+1
endloop
endfunction
function Func7085 takes string loc_string01, player loc_player01 returns playercolor
if loc_string01=="red"then
  return PLAYER_COLOR_RED
elseif loc_string01=="blue"then
  return PLAYER_COLOR_BLUE
elseif loc_string01=="teal"then
  return PLAYER_COLOR_CYAN
elseif loc_string01=="purple"then
  return PLAYER_COLOR_PURPLE
elseif loc_string01=="yellow"then
  return PLAYER_COLOR_YELLOW
elseif loc_string01=="orange"then
  return PLAYER_COLOR_ORANGE
elseif loc_string01=="green"then
  return PLAYER_COLOR_GREEN
elseif loc_string01=="pink"then
  return PLAYER_COLOR_PINK
elseif loc_string01=="gray"then
  return PLAYER_COLOR_LIGHT_GRAY
elseif loc_string01=="lb"then
  return PLAYER_COLOR_LIGHT_BLUE
elseif loc_string01=="dg"then
  return PLAYER_COLOR_AQUA
elseif loc_string01=="brown"then
  return PLAYER_COLOR_BROWN
endif
set loc_player01=null
set loc_string01=""
return GetPlayerColor(loc_player01)
endfunction
function Func7086 takes nothing returns nothing
call KillUnit(GetTriggerUnit())
endfunction
function Func7087 takes nothing returns nothing
call SetUnitExploded(GetTriggerUnit(),true)
endfunction
function Func7088 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_RED)
endfunction
function Func7089 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_BLUE)
endfunction
function Func7090 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_GREEN)
endfunction
function Func7091 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_PINK)
endfunction
function Func7092 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_PURPLE)
endfunction
function Func7093 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_LIGHT_GRAY)
endfunction
function Func7094 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_LIGHT_BLUE)
endfunction
function Func7095 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_AQUA)
endfunction
function Func7096 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_YELLOW)
endfunction
function Func7097 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_ORANGE)
endfunction
function Func7098 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_CYAN)
endfunction
function Func7099 takes nothing returns nothing
call SetUnitColor(GetTriggerUnit(),PLAYER_COLOR_BROWN)
endfunction
function Func7100 takes string loc_string01 returns player
if loc_string01=="red"then
  return Player(0)
elseif loc_string01=="blue"then
  return Player(1)
elseif loc_string01=="teal"then
  return Player(2)
elseif loc_string01=="purple"then
  return Player(3)
elseif loc_string01=="yellow"then
  return Player(4)
elseif loc_string01=="orange"then
  return Player(5)
elseif loc_string01=="green"then
  return Player(6)
elseif loc_string01=="pink"then
  return Player(7)
elseif loc_string01=="gray"then
  return Player(8)
elseif loc_string01=="lb"then
  return Player(9)
elseif loc_string01=="dg"then
  return Player(10)
elseif loc_string01=="brown"then
  return Player(11)
endif
set loc_string01=""
return null
endfunction
function Func7101 takes string loc_string01 returns integer
local integer loc_integer01 = 48
loop
  exitwhen loc_integer01>122
  if ( strings036[loc_integer01] == loc_string01 ) then
    return loc_integer01
  endif
  set loc_integer01 = loc_integer01 + 1
endloop
return 0
endfunction
function Func7102 takes nothing returns nothing
set integers2557[Func7101("0")]=48
set integers2557[Func7101("1")]=49
set integers2557[Func7101("2")]=50
set integers2557[Func7101("3")]=51
set integers2557[Func7101("4")]=52
set integers2557[Func7101("5")]=53
set integers2557[Func7101("6")]=54
set integers2557[Func7101("7")]=55
set integers2557[Func7101("8")]=56
set integers2557[Func7101("9")]=57
set integers2557[Func7101("a")]=97
set integers2557[Func7101("b")]=98
set integers2557[Func7101("c")]=99
set integers2557[Func7101("d")]=100
set integers2557[Func7101("e")]=101
set integers2557[Func7101("f")]=102
set integers2557[Func7101("g")]=103
set integers2557[Func7101("h")]=104
set integers2557[Func7101("i")]=105
set integers2557[Func7101("j")]=106
set integers2557[Func7101("k")]=107
set integers2557[Func7101("l")]=108
set integers2557[Func7101("m")]=109
set integers2557[Func7101("n")]=110
set integers2557[Func7101("o")]=111
set integers2557[Func7101("p")]=112
set integers2557[Func7101("q")]=113
set integers2557[Func7101("r")]=114
set integers2557[Func7101("s")]=115
set integers2557[Func7101("t")]=116
set integers2557[Func7101("u")]=117
set integers2557[Func7101("v")]=118
set integers2557[Func7101("w")]=119
set integers2557[Func7101("x")]=120
set integers2557[Func7101("y")]=121
set integers2557[Func7101("z")]=122
set integers2557[Func7101("-")]=123
set integers2557[Func7101(".")]=124
set integers2557[Func7101("A")]=65
set integers2557[Func7101("B")]=66
set integers2557[Func7101("C")]=67
set integers2557[Func7101("D")]=68
set integers2557[Func7101("E")]=69
set integers2557[Func7101("F")]=70
set integers2557[Func7101("G")]=71
set integers2557[Func7101("H")]=72
set integers2557[Func7101("I")]=73
set integers2557[Func7101("J")]=74
set integers2557[Func7101("K")]=75
set integers2557[Func7101("L")]=76
set integers2557[Func7101("M")]=77
set integers2557[Func7101("N")]=78
set integers2557[Func7101("O")]=79
set integers2557[Func7101("P")]=80
set integers2557[Func7101("Q")]=81
set integers2557[Func7101("R")]=82
set integers2557[Func7101("S")]=83
set integers2557[Func7101("T")]=84
set integers2557[Func7101("U")]=85
set integers2557[Func7101("V")]=86
set integers2557[Func7101("W")]=87
set integers2557[Func7101("X")]=88
set integers2557[Func7101("Y")]=89
set integers2557[Func7101("Z")]=90
endfunction
function Func7103 takes nothing returns nothing
set strings036[48]="0"
set strings036[49]="1"
set strings036[50]="2"
set strings036[51]="3"
set strings036[52]="4"
set strings036[53]="5"
set strings036[54]="6"
set strings036[55]="7"
set strings036[56]="8"
set strings036[57]="9"
set strings036[97]="a"
set strings036[98]="b"
set strings036[99]="c"
set strings036[100]="d"
set strings036[101]="e"
set strings036[102]="f"
set strings036[103]="g"
set strings036[104]="h"
set strings036[105]="i"
set strings036[106]="j"
set strings036[107]="k"
set strings036[108]="l"
set strings036[109]="m"
set strings036[110]="n"
set strings036[111]="o"
set strings036[112]="p"
set strings036[113]="q"
set strings036[114]="r"
set strings036[115]="s"
set strings036[116]="t"
set strings036[117]="u"
set strings036[118]="v"
set strings036[119]="w"
set strings036[120]="x"
set strings036[121]="y"
set strings036[122]="z"
set strings036[123]="-"
set strings036[124]="."
set strings036[65]="A"
set strings036[66]="B"
set strings036[67]="C"
set strings036[68]="D"
set strings036[69]="E"
set strings036[70]="F"
set strings036[71]="G"
set strings036[72]="H"
set strings036[73]="I"
set strings036[74]="J"
set strings036[75]="K"
set strings036[76]="L"
set strings036[77]="M"
set strings036[78]="N"
set strings036[79]="O"
set strings036[80]="P"
set strings036[81]="Q"
set strings036[82]="R"
set strings036[83]="S"
set strings036[84]="T"
set strings036[85]="U"
set strings036[86]="V"
set strings036[87]="W"
set strings036[88]="X"
set strings036[89]="Y"
set strings036[90]="Z"
call Func7084()
endfunction
function Func7104 takes string loc_string01 returns integer
return Func7101(SubString(loc_string01,0,1))*0x1000000+Func7101(SubString(loc_string01,1,2))*0x10000+Func7101(SubString(loc_string01,2,3))*0x100+Func7101(SubString(loc_string01,3,4))
endfunction
function Func7105 takes integer loc_integer01,player loc_player01 returns nothing
local string loc_string01
set loc_string01=strings036[loc_integer01/0x1000000]+strings036[(loc_integer01-0x1000000*(loc_integer01/0x1000000))/0x10000]+strings036[((loc_integer01-0x1000000*(loc_integer01/0x1000000))-0x10000*((loc_integer01-0x1000000*(loc_integer01/0x1000000))/0x10000))/0x100]+strings036[((loc_integer01-0x1000000*(loc_integer01/0x1000000))-0x10000*((loc_integer01-0x1000000*(loc_integer01/0x1000000))/0x10000))-0x100*(((loc_integer01-0x1000000*(loc_integer01/0x1000000))-0x10000*((loc_integer01-0x1000000*(loc_integer01/0x1000000))/0x10000))/0x100)]
call DisplayTextToPlayer(loc_player01,0,0,loc_string01)
endfunction
function Func7106 takes nothing returns nothing
local player loc_player01=GetTriggerPlayer()
local integer loc_integer01=GetTrainedUnitType()
local location loc_location01=GetUnitLoc(GetTriggerUnit())
call CreateUnitAtLoc(loc_player01,loc_integer01,loc_location01,270)
set loc_player01=null
set loc_location01=null
endfunction
function Func7107 takes player loc_player01,string loc_string01 returns nothing
local trigger loc_trigger01=CreateTrigger()
local triggeraction loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7106)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(33),null)
call Func7080(loc_player01,loc_string01,false)
call DisableTrigger(loc_trigger01)
call TriggerRemoveAction(loc_trigger01,loc_triggeraction01)
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_triggeraction01=null
set loc_player01=null
set loc_string01=""
endfunction
function Func7108 takes nothing returns nothing
call UnitSetConstructionProgress(GetTriggerUnit(),100)
call UnitSetUpgradeProgress(GetTriggerUnit(),100)
endfunction
function Func7109 takes nothing returns nothing
local player loc_player01=GetTriggerPlayer()
local integer loc_integer01=GetResearched()
local integer loc_integer02=GetPlayerTechCount(loc_player01,loc_integer01,true)
call SetPlayerTechResearched(loc_player01,loc_integer01,loc_integer02+1)
set loc_player01=null
endfunction
function Func7110 takes nothing returns nothing
local unit loc_unit01=GetTriggerUnit()
local location loc_location01=GetOrderPointLoc()
if GetIssuedOrderId()==851990then
  call SetUnitPosition(loc_unit01,GetLocationX(loc_location01),GetLocationY(loc_location01))
endif
set loc_unit01=null
set loc_location01=null
endfunction
function Func7111 takes player loc_player01,string loc_string01 returns nothing
local trigger loc_trigger01=CreateTrigger()
local triggeraction loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7110)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(39),null)
call Func7080(loc_player01,loc_string01,false)
call DisableTrigger(loc_trigger01)
call TriggerRemoveAction(loc_trigger01,loc_triggeraction01)
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_triggeraction01=null
set loc_player01=null
set loc_string01=""
endfunction
function Func7112 takes nothing returns nothing
local player loc_player01=GetTriggerPlayer()
call CreateUnitAtLoc(loc_player01,integer1143,GetOrderPointLoc(),bj_UNIT_FACING)
call CreateItemLoc(integer1143,GetOrderPointLoc())
call CreateDestructableLoc(integer1143,GetOrderPointLoc(),bj_UNIT_FACING,1,10)
set loc_player01=null
endfunction
function Func7113 takes player loc_player01 returns nothing
call TriggerRegisterPlayerUnitEvent(trigger053,loc_player01,EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,null)
call TriggerAddAction(trigger053,function Func7112)
set loc_player01=null
endfunction
function Func7114 takes player loc_player01,boolean loc_boolean01,string loc_string01 returns nothing
local trigger loc_trigger01=CreateTrigger()
local triggeraction loc_triggeraction01
if loc_boolean01 then
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7108)
else
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7109)
endif
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(30),null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(27),null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(40),null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(38),null)
call TriggerRegisterPlayerUnitEvent(loc_trigger01,loc_player01,ConvertPlayerUnitEvent(35),null)
call Func7080(loc_player01,loc_string01,false)
call DisableTrigger(loc_trigger01)
call TriggerRemoveAction(loc_trigger01,loc_triggeraction01)
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_triggeraction01=null
set loc_player01=null
set loc_string01=""
endfunction
function Func7115 takes string loc_string01 returns string
local integer loc_integer01=0
local string loc_string02=""
local integer loc_integer02=StringLength(loc_string01)
loop
  exitwhen loc_integer01>loc_integer02
  if SubString(loc_string01,loc_integer01,loc_integer01+1)=="*"then
    set loc_string02=loc_string02+"|cff"
  elseif SubString(loc_string01,loc_integer01,loc_integer01+1)=="-"then
    set loc_string02=loc_string02+"|r"
  else
    set loc_string02=loc_string02+SubString(loc_string01,loc_integer01,loc_integer01+1)
  endif
  set loc_integer01=loc_integer01+1
endloop
set loc_string01=""
return loc_string02
endfunction
function Func7116 takes nothing returns boolean
return(IsPlayerInForce(Player(0),force001)==false)and(GetTriggerPlayer()==Player(0))
endfunction
function Func7117 takes nothing returns boolean
return(IsPlayerInForce(Player(1),force001)==false)and(GetTriggerPlayer()==Player(1))
endfunction
function Func7118 takes nothing returns boolean
return(IsPlayerInForce(Player(2),force001)==false)and(GetTriggerPlayer()==Player(2))
endfunction
function Func7119 takes nothing returns boolean
return(IsPlayerInForce(Player(3),force001)==false)and(GetTriggerPlayer()==Player(3))
endfunction
function Func7120 takes nothing returns boolean
return(IsPlayerInForce(Player(4),force001)==false)and(GetTriggerPlayer()==Player(4))
endfunction
function Func7121 takes nothing returns boolean
return(IsPlayerInForce(Player(5),force001)==false)and(GetTriggerPlayer()==Player(5))
endfunction
function Func7122 takes nothing returns boolean
return(IsPlayerInForce(Player(6),force001)==false)and(GetTriggerPlayer()==Player(6))
endfunction
function Func7123 takes nothing returns boolean
return(IsPlayerInForce(Player(7),force001)==false)and(GetTriggerPlayer()==Player(7))
endfunction
function Func7124 takes nothing returns boolean
return(IsPlayerInForce(Player(8),force001)==false)and(GetTriggerPlayer()==Player(8))
endfunction
function Func7125 takes nothing returns boolean
return(IsPlayerInForce(Player(9),force001)==false)and(GetTriggerPlayer()==Player(9))
endfunction
function Func7126 takes nothing returns boolean
return(IsPlayerInForce(Player(10),force001)==false)and(GetTriggerPlayer()==Player(10))
endfunction
function Func7127 takes nothing returns boolean
return(IsPlayerInForce(Player(11),force001)==false)and(GetTriggerPlayer()==Player(11))
endfunction
function Func7128 takes nothing returns nothing
if(Func7116())then
  call DisplayTextToForce(force001,("|cffFF0000"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7117())then
  call DisplayTextToForce(force001,("|cff0000FF"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7118())then
  call DisplayTextToForce(force001,("|cff00FFFF"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7119())then
  call DisplayTextToForce(force001,("|cffA020F0"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7120())then
  call DisplayTextToForce(force001,("|cffFFFF00"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7121())then
  call DisplayTextToForce(force001,("|cffFFA500"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7122())then
  call DisplayTextToForce(force001,("|cff00FF00"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7123())then
  call DisplayTextToForce(force001,("|cffFF1493"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7124())then
  call DisplayTextToForce(force001,("|cff696969"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7125())then
  call DisplayTextToForce(force001,("|cff9AC0CD"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7126())then
  call DisplayTextToForce(force001,("|cff006400"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
if(Func7127())then
  call DisplayTextToForce(force001,("|cff8B4513"+(GetPlayerName(GetTriggerPlayer())+("|r : "+GetEventPlayerChatString()))))
endif
endfunction
function Func7129 takes nothing returns nothing
local integer loc_integer01=0
loop
  exitwhen loc_integer01>11
  call TriggerRegisterPlayerChatEvent(trigger054,Player(loc_integer01),"",false)
  set loc_integer01=loc_integer01+1
endloop
call TriggerAddAction(trigger054,function Func7128)
endfunction
function Func7130 takes player loc_player01 returns nothing
local fogmodifier loc_fogmodifier01=CreateFogModifierRect(loc_player01,FOG_OF_WAR_VISIBLE,bj_mapInitialPlayableArea,false,false)
call FogModifierStart(loc_fogmodifier01)
call Func7080(loc_player01,"-nomh",false)
call FogModifierStop(loc_fogmodifier01)
call DestroyFogModifier(loc_fogmodifier01)
set loc_fogmodifier01=null
set loc_player01=null
endfunction
function Func7131 takes nothing returns nothing
call SetTerrainType(GetOrderPointX(),GetOrderPointY(),integer1144,-1,integer1145,1)
endfunction
function Func7132 takes player loc_player01 returns nothing
call TriggerRegisterPlayerUnitEvent(trigger056,loc_player01,EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,null)
call TriggerAddAction(trigger056,function Func7131)
endfunction
function Func7133 takes nothing returns nothing
set trigger060=CreateTrigger()
call TriggerRegisterEnterRectSimple( trigger060, rect063 )
if string007=="kill"then
  call TriggerAddAction(trigger060,function Func7086)
elseif string007=="explode"then
  call TriggerAddAction(trigger060,function Func7087)
elseif string007=="red"then
  call TriggerAddAction(trigger060,function Func7088)
elseif string007=="blue"then
  call TriggerAddAction(trigger060,function Func7089)
elseif string007=="pink"then
  call TriggerAddAction(trigger060,function Func7091)
elseif string007=="green"then
  call TriggerAddAction(trigger060,function Func7090)
elseif string007=="brown"then
  call TriggerAddAction(trigger060,function Func7099)
elseif string007=="lb"then
  call TriggerAddAction(trigger060,function Func7094)
elseif string007=="dg"then
  call TriggerAddAction(trigger060,function Func7095)
elseif string007=="teal"then
  call TriggerAddAction(trigger060,function Func7098)
elseif string007=="yellow"then
  call TriggerAddAction(trigger060,function Func7096)
elseif string007=="gray"then
  call TriggerAddAction(trigger060,function Func7093)
elseif string007=="orange"then
  call TriggerAddAction(trigger060,function Func7097)
elseif string007=="purple"then
  call TriggerAddAction(trigger060,function Func7092)
elseif string007=="none"then
  call TriggerAddAction(trigger060,null)
endif
endfunction
function Func7134 takes nothing returns nothing
set integer1142=integer1142+1
if integer1142==1 then
  set real279=GetOrderPointX()
  set real280=GetOrderPointY()
endif
if integer1142==2 then
  set real281=GetOrderPointX()
  set real282=GetOrderPointY()
  call DestroyTrigger(trigger057)
  set integer1142=0
  if real279+real280<real281+real282 then
    set rect063=Rect(real279,real280,real281,real282)
  elseif real279+real280>real281+real282 then
    set rect063=Rect(real281,real282,real279,real280)
  endif
  call Func7133()
endif
endfunction
function Func7135 takes player loc_player01 returns nothing
set trigger057=CreateTrigger()
call TriggerRegisterPlayerUnitEvent(trigger057,loc_player01,EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER,null)
call TriggerAddAction(trigger057,function Func7134)
endfunction
function Func7136 takes nothing returns nothing
call SetUnitLifePercentBJ(GroupPickRandomUnit(group016),real283)
endfunction
function Func7137 takes player loc_player01,string loc_string01 returns nothing
local sound loc_sound01=CreateSound("cool.mp3",false,false,false,10,10,"DefaultEAXON")
local integer loc_integer01=S2I(SubString(loc_string01,7,12))/50
local integer loc_integer02=S2I(SubString(loc_string01,5,20))
local integer loc_integer03=S2I(SubString(loc_string01,4,19))
local integer loc_integer04=S2I(SubString(loc_string01,6,9))
local integer loc_integer05=S2I(SubString(loc_string01,9,11))
local real loc_real01=S2R(SubString(loc_string01,6,20))
local string loc_string02=I2S(GetPlayerId(loc_player01))
local group loc_group01=CreateGroup()
local group loc_group02=CreateGroup()
local integer loc_integer06=0
local integer loc_integer07=0
local integer loc_integer08=0
local unit loc_unit01
local unit loc_unit02
if SubString(loc_string01,0,6)=="-gold "then
  call SetPlayerState(loc_player01,PLAYER_STATE_RESOURCE_GOLD,GetPlayerState(loc_player01,PLAYER_STATE_RESOURCE_GOLD)+S2I(SubString(loc_string01,6,13)))
elseif SubString(loc_string01,0,7)=="-lumber"then
  call SetPlayerState(loc_player01,PLAYER_STATE_RESOURCE_LUMBER,GetPlayerState(loc_player01,PLAYER_STATE_RESOURCE_LUMBER)+S2I(SubString(loc_string01,8,15)))
elseif SubString(loc_string01,0,5)=="-mana"then
  call Func7083(loc_player01,true,"-nomana")
elseif SubString(loc_string01,0,5)=="-nocd"then
  call Func7083(loc_player01,false,"-cdon")
elseif SubString(loc_string01,0,9)=="-showkeys"then
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000Left: "+GetStoredString(gamecache001,loc_string02,"left"))
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000Right: "+GetStoredString(gamecache001,loc_string02,"right"))
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000Up: "+GetStoredString(gamecache001,loc_string02,"up"))
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000Down: "+GetStoredString(gamecache001,loc_string02,"down"))
elseif SubString(loc_string01,0,10)=="-locktrade"then
  call SetMapFlag(MAP_LOCK_RESOURCE_TRADING,true)
elseif SubString(loc_string01,0,12)=="-unlocktrade"then
  call SetMapFlag(MAP_LOCK_RESOURCE_TRADING,false)
elseif SubString(loc_string01,0,5)=="-lock"then
  call SetMapFlag(MAP_LOCK_ALLIANCE_CHANGES,true)
  call SetMapFlag(MAP_ALLIANCE_CHANGES_HIDDEN,true)
  call SetMapFlag(MAP_SHARED_ADVANCED_CONTROL,false)
elseif SubString(loc_string01,0,7)=="-unlock"then
  call SetMapFlag(MAP_LOCK_ALLIANCE_CHANGES,false)
  call SetMapFlag(MAP_ALLIANCE_CHANGES_HIDDEN,false)
elseif SubString(loc_string01,0,9)=="-shareall"then
  loop
    exitwhen loc_integer02>15
    call SetPlayerAllianceStateFullControlBJ(Player(loc_integer02),loc_player01,true)
    call SetPlayerAllianceStateControlBJ(Player(loc_integer02),loc_player01,true)
    call SetPlayerAllianceStateVisionBJ(Player(loc_integer02),loc_player01,true)
    set loc_integer02=loc_integer02+1
  endloop
elseif SubString(loc_string01,0,5)=="-soff"then
  loop
    exitwhen loc_integer02>15
    if GetPlayerId(loc_player01)!=loc_integer02 then
      call SetPlayerAllianceStateFullControlBJ(Player(loc_integer02),loc_player01,false)
      call SetPlayerAllianceStateControlBJ(Player(loc_integer02),loc_player01,false)
      call SetPlayerAllianceStateVisionBJ(Player(loc_integer02),loc_player01,false)
    endif
    set loc_integer02=loc_integer02+1
  endloop
elseif SubString(loc_string01,0,7)=="-share " and S2I(SubString(loc_string01,7,9))<16 and S2I(SubString(loc_string01,7,9))>-1then
  call SetPlayerAllianceStateFullControlBJ(Player(S2I(SubString(loc_string01,7,9))),loc_player01,true)
  call SetPlayerAllianceStateControlBJ(Player(S2I(SubString(loc_string01,7,9))),loc_player01,true)
  call SetPlayerAllianceStateVisionBJ(Player(S2I(SubString(loc_string01,7,9))),loc_player01,true)
elseif SubString(loc_string01,0,9)=="-unshare " and S2I(SubString(loc_string01,9,11))<16 and S2I(SubString(loc_string01,7,9))>-1then
  call SetPlayerAllianceStateFullControlBJ(Player(S2I(SubString(loc_string01,9,11))),loc_player01,false)
  call SetPlayerAllianceStateControlBJ(Player(S2I(SubString(loc_string01,9,11))),loc_player01,false)
  call SetPlayerAllianceStateVisionBJ(Player(S2I(SubString(loc_string01,9,11))),loc_player01,false)
elseif SubString(loc_string01,0,6)=="-ally "and S2I(SubString(loc_string01,6,8))<16 and S2I(SubString(loc_string01,6,8))>-1then
  call SetPlayerAllianceStateAllyBJ(loc_player01,Player(S2I(SubString(loc_string01,6,8))),true)
  call SetPlayerAllianceStateAllyBJ(Player(S2I(SubString(loc_string01,6,8))),loc_player01,true)
  call SetPlayerAllianceStateVisionBJ(Player(S2I(SubString(loc_string01,6,8))),loc_player01,true)
elseif SubString(loc_string01,0,8)=="-unally "and S2I(SubString(loc_string01,8,10))<16 and S2I(SubString(loc_string01,8,10))>-1then
  call SetPlayerAllianceStateAllyBJ(loc_player01,Player(S2I(SubString(loc_string01,8,10))),false)
  call SetPlayerAllianceStateAllyBJ(Player(S2I(SubString(loc_string01,8,10))),loc_player01,false)
elseif SubString(loc_string01,0,10)=="-unallyall"then
  loop
    exitwhen loc_integer02>11
    if GetPlayerId(loc_player01)!=loc_integer02 then
      call SetPlayerAllianceStateAllyBJ(loc_player01,Player(loc_integer02),false)
      call SetPlayerAllianceStateAllyBJ(Player(loc_integer02),loc_player01,false)
      call SetPlayerAllianceStateVisionBJ(loc_player01,Player(loc_integer02),false)
    endif
    set loc_integer02=loc_integer02+1
  endloop
elseif SubString(loc_string01,0,8)=="-allyall"then
  loop
    exitwhen loc_integer02>11
    call SetPlayerAllianceStateAllyBJ(loc_player01,Player(loc_integer02),true)
    call SetPlayerAllianceStateAllyBJ(Player(loc_integer02),loc_player01,true)
    call SetPlayerAllianceStateVisionBJ(loc_player01,Player(loc_integer02),true)
    set loc_integer02=loc_integer02+1
  endloop
elseif SubString(loc_string01,0,8)=="-setname"then
  call SetPlayerName(loc_player01,Func7115(SubString(loc_string01,9,200)))
elseif SubString(loc_string01,0,6)=="-food "then
  call SetPlayerState(loc_player01,PLAYER_STATE_FOOD_CAP_CEILING,S2I(SubString(loc_string01,6,10)))
  call SetPlayerState(loc_player01,PLAYER_STATE_RESOURCE_FOOD_CAP,S2I(SubString(loc_string01,6,10)))
elseif SubString(loc_string01,0,9)=="-setcolor"then
  call SetPlayerColor(loc_player01,Func7085(SubString(loc_string01,10,16),loc_player01))
elseif SubString(loc_string01,0,4)=="-say"then
  call DisplayTextToForce(bj_FORCE_ALL_PLAYERS,(("|cff"+SubString(loc_string01,4,10))+Func7115(SubString(loc_string01,10,400))))
elseif SubString(loc_string01,0,5)=="-fast"then
  call Func7107(loc_player01,"-nofast")
elseif SubString(loc_string01,0,6)=="-ufast"then
  call Func7114(loc_player01,false,"-noufast")
elseif SubString(loc_string01,0,7)=="-bfast"then
  call Func7114(loc_player01,true,"-nobfast")
elseif SubString(loc_string01,0,5)=="-tele"then
  call Func7111(loc_player01,"-note")
elseif SubString(loc_string01,0,7)=="-colors"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"|CFFFF000000|r |CFF0000FF01|r |CFF01E7E702|r |CFF40008003|r |CFFFFFF0004|r |CFFF97C0005|r |CFF00FF0006|r |CFFFF80C007|r |CFFC0C0C008|r |CFF93C4F409|r |CFF00804010|r |CFF57220211|r")
elseif SubString(loc_string01,0,3)=="-g " and S2I(SubString(loc_string01,3,5))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call SetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_RESOURCE_GOLD,GetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_RESOURCE_GOLD)+S2I(SubString(loc_string01,6,13)))
elseif SubString(loc_string01,0,3)=="-l " and S2I(SubString(loc_string01,3,5))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call SetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_RESOURCE_LUMBER,GetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_RESOURCE_LUMBER)+S2I(SubString(loc_string01,6,13)))
elseif SubString(loc_string01,0,3)=="-f " and S2I(SubString(loc_string01,3,5))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call SetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_FOOD_CAP_CEILING,S2I(SubString(loc_string01,6,20)))
  call SetPlayerState(Player(S2I(SubString(loc_string01,3,5))),PLAYER_STATE_RESOURCE_FOOD_CAP,S2I(SubString(loc_string01,6,20)))
elseif SubString(loc_string01,0,4)=="-sc " and S2I(SubString(loc_string01,4,6))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call SetPlayerColor(Player(S2I(SubString(loc_string01,4,6))),Func7085(SubString(loc_string01,7,13),Player(S2I(SubString(loc_string01,4,6)))))
elseif SubString(loc_string01,0,4)=="-sn " and S2I(SubString(loc_string01,4,6))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call SetPlayerName(Player(S2I(SubString(loc_string01,4,6))),Func7115(SubString(loc_string01,7,300)))
elseif SubString(loc_string01,0,6)=="-kick " and S2I(SubString(loc_string01,6,8))<16 and S2I(SubString(loc_string01,3,5))>-1then
  call CustomDefeatBJ(Player(S2I(SubString(loc_string01,6,8))),SubString(loc_string01,9,200))
elseif SubString(loc_string01,0,5)=="-hear"then
  call ForceAddPlayer(force001,loc_player01)
  call Func7129()
elseif SubString(loc_string01,0,7)=="-nohear"then
  call ForceRemovePlayer(force001,loc_player01)
elseif SubString(loc_string01,0,9)=="-noreplay"then
  call DoNotSaveReplay()
elseif SubString(loc_string01,0,5)=="-time"then
  call SetTimeOfDay(S2R(SubString(loc_string01,6,9)))
elseif SubString(loc_string01,0,8)=="-disable"then
  call DisableTrigger(trigger060)
elseif SubString(loc_string01,0,5)=="-reg "then
  set string007=SubString(loc_string01,5,12)
  call Func7135(loc_player01)
elseif SubString(loc_string01,0,6)=="-list1"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-gold # - Adds # to your current gold")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-lumber # - Adds # to your current lumber")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-int # - Adds # intelligence to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-agi # - Adds # agility to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-str # - Adds # strength to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-lvl # - Sets # level to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-xp # - Sets # experience to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-hp # - Sets # health points to selected hero")
elseif SubString(loc_string01,0,6)=="-list2"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-mp # - Sets # mana points to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-ms # - Sets # move speed to selected hero")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-additem # - Spawns # random items")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-invul - Makes selected units invulnerable")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-vul - Makes selected units vulnerable")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-kill - Kills selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-vis - Makes selected units visible")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-invis - Makes selected units invisible")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-colors - Displays player color number ids")
elseif SubString(loc_string01,0,6)=="-list3"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-pathoff - Makes selected units Uncollide")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-pathon - Makes selected units collide")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-setcolor <color> - Sets your name and units color to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-owner <color> - Sets owner of selected unit to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-nocd - Turns off cooldown for all heros")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-cdon - Truns cooldown on for all heros")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-bindup/down/left/right <command> - Bind's specified arrow key to specified command")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-mh Reveals the map for you")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-unitid Shows seletec units rawcodes")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-itemid Shows item of first slot's rawcode")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-destid Shows rawcode of destructable in the region made by -reg")
elseif SubString(loc_string01,0,6)=="-list4"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-setname <name> - Sets your name to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-size # - Sets selected units to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-food # - Sets your food limit to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-nofood - Makes selected units not use food")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-heal - Heals selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-copy # - Makes # copies of selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-fast - Upgrades take no time")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-bfast - Press ESC on a builing structure and it will be completed")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-ufast - Press ESC on training structure and unit will be done")
elseif SubString(loc_string01,0,6)=="-list5"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-shareall - Everyone will share units with you")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-share ## - Shares player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-unshare ## - Unshares player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-ally ## - Allies with player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-unally ## - Unallies with player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-soff - Unshares with everyone")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-spawn #### - Spawns unit/destructable specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-ground #### - Changes ground to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-regmin - Click to set Minx and Miny")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-regmax - Click to set Maxx and Maxy")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-reg <kill/explode/red/blue/teal/green/grey/pink/purple/orange/brown/lb/dg/yellow> - Set react to specified")
elseif SubString(loc_string01,0,6)=="-list6"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-add #### - Adds specified ability to selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-remove #### - Removes specified ablilty of selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-g ## - Adds gold to specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-l ## - Adds lumber to specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-f ## - Sets food of specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-spa #### ## - Spawns specified unit/destructable to specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-sn ## <name> - Sets specified name to specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-sc ## <color> - Sets specified color to specified player")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-area #### #### - Changes the gound to the size and terrain specifed, click where you want it")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-noarea - Disables -area")
elseif SubString(loc_string01,0,6)=="-list7"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-dead - Plays dead animation to selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-birth - Plays birth animation to selected structurs")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-stand - Plays stand animation to selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-attack - Plays attack animation to selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-hear - Tells you what everonyone is saying")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-nohear - Turns -hear off")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-noreaply - Disables replay")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-kick ## <message> - Kicks specified player with specified message")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-tele - Sets patrol to teleport")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-note - Sets patrol to normal")
elseif SubString(loc_string01,0,6)=="-list8"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-loc - Shows position X and Y of selected units")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-stop - Disables selected units commands")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-resume - Enables selected units commands")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-time ## - Sets time of day to specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-autoh ### - Autoheals unit to precent specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-disable - Disables reacts made by -reg")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-cheaton ## - Turns cheats on for player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-cheatoff ## - Turns cheats off for player specified")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-unit #### - Creates unit at seleceted units issused location")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"-nounit - Disables -unit")
elseif SubString(loc_string01,0,9)=="-cheatoff"then
  call ForceRemovePlayer(force002,Player(S2I(SubString(loc_string01,10,12))))
elseif SubString(loc_string01,0,8)=="-cheaton"then
  call ForceAddPlayer(force002,Player(S2I(SubString(loc_string01,9,11))))
  call TriggerRegisterPlayerChatEvent(trigger058,Player(S2I(SubString(loc_string01,9,11))),"-",false)
elseif SubString(loc_string01,0,6)=="-unit "then
  call DestroyTrigger(trigger053)
  set trigger053=CreateTrigger()
  set integer1143=Func7104(SubString(loc_string01,6,10))
  call Func7113(loc_player01)
elseif SubString(loc_string01,0,7)=="-nounit"then
  call DestroyTrigger(trigger053)
elseif SubString(loc_string01,0,5)=="-area"then
  call DestroyTrigger(trigger056)
  set trigger056=CreateTrigger()
  set integer1144=Func7104(SubString(loc_string01,9,13))
  set integer1145=S2I(SubString(loc_string01,6,8))
  call Func7132(loc_player01)
elseif SubString(loc_string01,0,7)=="-noarea"then
  call DestroyTrigger(trigger056)
elseif SubString(loc_string01,0,4)=="-act"then
  set string006=SubString(loc_string01,5,100)
elseif SubString(loc_string01,0,7)=="-destid"then
  call Func7105(GetDestructableTypeId(RandomDestructableInRectSimpleBJ(rect063)),loc_player01)
endif
call GroupEnumUnitsSelected(loc_group01,loc_player01,null)
loop
  set loc_unit01=FirstOfGroup(loc_group01)
  exitwhen loc_unit01==null
  if loc_integer02>=0 then
    if SubString(loc_string01,0,4)=="-int"then
      call SetHeroInt(loc_unit01,loc_integer02,true)
    elseif SubString(loc_string01,0,4)=="-agi"then
      call SetHeroAgi(loc_unit01,loc_integer02,true)
    elseif SubString(loc_string01,0,4)=="-str"then
      call SetHeroStr(loc_unit01,loc_integer02,true)
    endif
  endif
  if SubString(loc_string01,0,6)=="-invis"then
    call UnitAddAbility(loc_unit01,'Apiv')
  elseif SubString(loc_string01,0,6)=="-vis"then
    call UnitRemoveAbility(loc_unit01,'Apiv')
  elseif SubString(loc_string01,0,7)=="-revive"then
    set loc_group02=GetUnitsOfPlayerAll(loc_player01)
    set loc_unit02=FirstOfGroup(loc_group02)
    call ReviveHeroLoc(loc_unit02,GetUnitLoc(loc_unit01),false)
  elseif SubString(loc_string01,0,8)=="-destroy"then
    call RemoveUnit(loc_unit01)
  elseif SubString(loc_string01,0,7)=="-addhp "then
    if loc_integer01>200then
      set loc_integer01=200
    endif
    call UnitAddAbility(loc_unit01,'AInv')
    loop
      exitwhen loc_integer06>=loc_integer01
      set loc_integer06=loc_integer06+1
      call UnitAddItemToSlotById(loc_unit01,'manh',6)
    endloop
  elseif SubString(loc_string01,0,7)=="-nofood"then
    call SetUnitUseFood(loc_unit01,false)
  elseif SubString(loc_string01,0,5)=="-food"then
    call SetUnitUseFood(loc_unit01,true)
  elseif SubString(loc_string01,0,7)=="-unitid"then
    call Func7105(GetUnitTypeId(loc_unit01),loc_player01)
  elseif SubString(loc_string01,0,7)=="-itemid"then
    call Func7105(GetItemTypeId(UnitItemInSlot(loc_unit01,0)),loc_player01)
  elseif SubString(loc_string01,0,6)=="-float"then
    call UnitAddAbility(loc_unit01,'Amrf')
    call SetUnitFlyHeight(loc_unit01,S2R(SubString(loc_string01,7,10)),S2R(SubString(loc_string01,11,14)))
    call UnitRemoveAbility(loc_unit01,'Amrf')
  elseif SubString(loc_string01,0,5)=="-stop"then
    call PauseUnit(loc_unit01,true)
  elseif SubString(loc_string01,0,7)=="-resume"then
    call PauseUnit(loc_unit01,false)
  elseif SubString(loc_string01,0,5)=="-heal"then
    call SetUnitLifePercentBJ(loc_unit01,100)
  elseif SubString(loc_string01,0,7)=="-autoh "then
    set real283=S2R(SubString(loc_string01,7,10))
    call GroupAddUnit(group016,loc_unit01)
    loop
      call TriggerSleepAction(.1)
      call Func7136()
    endloop
  elseif SubString(loc_string01,0,9)=="-autohoff"then
    call GroupClear(group016)
  elseif SubString(loc_string01,0,7)=="-attack"then
    call SetUnitAnimation(loc_unit01,"attack")
  elseif SubString(loc_string01,0,7)=="-dead"then
    call SetUnitAnimation(loc_unit01,"death")
  elseif SubString(loc_string01,0,6)=="-birth"then
    call SetUnitAnimation(loc_unit01,"birth")
  elseif SubString(loc_string01,0,6)=="-stand"then
    call SetUnitAnimation(loc_unit01,"stand")
  elseif SubString(loc_string01,0,6)=="-music"then
    call SetSoundDuration(loc_sound01,47334)
    call SetSoundChannel(loc_sound01,0)
    call SetSoundVolume(loc_sound01,127)
    call SetSoundPitch(loc_sound01,1.)
    call PlaySoundBJ(loc_sound01)
  elseif SubString(loc_string01,0,6)=="-owner"then
    call SetUnitOwner(loc_unit01,Func7100(SubString(loc_string01,7,16)),true)
  elseif SubString(loc_string01,0,5)=="-size"then
    call SetUnitScalePercent(loc_unit01,loc_real01,loc_real01,loc_real01)
  elseif SubString(loc_string01,0,4)=="-lvl"then
    call SetHeroLevel(loc_unit01,loc_integer02,false)
  elseif SubString(loc_string01,0,3)=="-xp"then
    call SetHeroXP(loc_unit01,loc_integer03,false)
  elseif SubString(loc_string01,0,3)=="-hp"then
    call SetWidgetLife(loc_unit01,loc_integer03)
  elseif SubString(loc_string01,0,3)=="-mp"then
    call SetUnitState(loc_unit01,UNIT_STATE_MANA,loc_integer03)
  elseif SubString(loc_string01,0,6)=="-invul"then
    call SetUnitInvulnerable(loc_unit01,true)
  elseif SubString(loc_string01,0,4)=="-vul"then
    call SetUnitInvulnerable(loc_unit01,false)
  elseif SubString(loc_string01,0,5)=="-kill"then
    call SetWidgetLife(loc_unit01,0)
  elseif SubString(loc_string01,0,3)=="-ms"then
    call SetUnitMoveSpeed(loc_unit01,loc_integer03)
  elseif SubString(loc_string01,0,7)=="-pathon"then
    call SetUnitPathing(loc_unit01,true)
  elseif SubString(loc_string01,0,8)=="-pathoff"then
    call SetUnitPathing(loc_unit01,false)
  elseif SubString(loc_string01,0,7)=="-debuff"then
    call UnitRemoveBuffs(loc_unit01,true,true)
  elseif SubString(loc_string01,0,8)=="-charges"then
    call SetItemCharges(UnitItemInSlot(loc_unit01,S2I(SubString(loc_string01,8,9))-1),S2I(SubString(loc_string01,10,20)))
  elseif SubString(loc_string01,0,8)=="-additem"then
    set loc_integer07=0
    loop
      set loc_integer07=loc_integer07+1
      exitwhen loc_integer07>loc_integer05
      call CreateItemLoc( ChooseRandomItemEx(ITEM_TYPE_ANY,-1), GetUnitLoc(loc_unit01) )
    endloop
  elseif SubString(loc_string01,0,4)=="-add"then
    call UnitAddAbility(loc_unit01,Func7104(SubString(loc_string01,5,9)))
    call SetUnitAbilityLevel(loc_unit01,Func7104(SubString(loc_string01,5,9)),S2I(SubString(loc_string01,10,11)))
  elseif SubString(loc_string01,0,7)=="-remove"then
    call UnitRemoveAbility(loc_unit01,Func7104(SubString(loc_string01,8,12)))
  elseif SubString(loc_string01,0,6)=="-spawn"then
    call SetPlayerTechResearchedSwap(Func7104(SubString(loc_string01,7,11)),3,loc_player01)
    call CreateUnitAtLoc(loc_player01,Func7104(SubString(loc_string01,7,11)),GetUnitLoc(loc_unit01),GetUnitFacing(loc_unit01))
    call CreateDestructableLoc(Func7104(SubString(loc_string01,7,11)),GetUnitLoc(loc_unit01),GetUnitFacing(loc_unit01),1,10)
    call CreateItemLoc(Func7104(SubString(loc_string01,7,11)),GetUnitLoc(loc_unit01))
  elseif SubString(loc_string01,0,7)=="-ground"then
    call SetTerrainTypeBJ(GetRectCenter(GetWorldBounds()),Func7104(SubString(loc_string01,8,12)),-1,0x3B9ACA00,1)
  elseif SubString(loc_string01,0,5)=="-spa " and S2I(SubString(loc_string01,5,7))<16then
    call CreateUnitAtLoc(Player(S2I(SubString(loc_string01,5,7))),Func7104(SubString(loc_string01,8,12)),GetUnitLoc(loc_unit01),GetUnitFacing(loc_unit01))
  elseif SubString(loc_string01,0,5)=="-copy" and SubString(loc_string01,6,7)!="0"then
    loop
      call CreateUnitAtLoc(GetOwningPlayer(loc_unit01),GetUnitTypeId(loc_unit01),GetUnitLoc(loc_unit01),GetUnitFacing(loc_unit01))
      set loc_integer08=loc_integer08+1
      exitwhen loc_integer08>=loc_integer04
      call TriggerSleepAction(.001)
    endloop
    call RemoveLocation(GetUnitLoc(loc_unit01))
  endif
  call GroupRemoveUnit(loc_group01,loc_unit01)
endloop
call DestroyGroup(loc_group01)
if SubString(loc_string01,0,3)=="-mh"then
  call Func7130(loc_player01)
endif
set loc_string01=""
set loc_string02=""
set loc_player01=null
set loc_group01=null
set loc_unit01=null
endfunction
function Func7138 takes nothing returns nothing
call Func7137(GetTriggerPlayer(),GetStoredString(gamecache001,I2S(GetPlayerId(GetTriggerPlayer())),"up"))
endfunction
function Func7139 takes nothing returns nothing
call Func7137(GetTriggerPlayer(),GetStoredString(gamecache001,I2S(GetPlayerId(GetTriggerPlayer())),"right"))
endfunction
function Func7140 takes nothing returns nothing
call Func7137(GetTriggerPlayer(),GetStoredString(gamecache001,I2S(GetPlayerId(GetTriggerPlayer())),"left"))
endfunction
function Func7141 takes nothing returns nothing
call Func7137(GetTriggerPlayer(),GetStoredString(gamecache001,I2S(GetPlayerId(GetTriggerPlayer())),"down"))
endfunction
function Func7142 takes player loc_player01,string loc_string01,string loc_string02,playerevent loc_playerevent01 returns nothing
local trigger loc_trigger01=CreateTrigger()
local triggeraction loc_triggeraction01
if loc_string02=="up"then
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7138)
elseif loc_string02=="left"then
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7140)
elseif loc_string02=="right"then
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7139)
else
  set loc_triggeraction01=TriggerAddAction(loc_trigger01,function Func7141)
endif
call TriggerRegisterPlayerEvent(loc_trigger01,loc_player01,loc_playerevent01)
call StoreString(gamecache001,I2S(GetPlayerId(loc_player01)),loc_string02,loc_string01)
call Func7080(loc_player01,"-bind"+loc_string02,true)
call DisableTrigger(loc_trigger01)
call TriggerRemoveAction(loc_trigger01,loc_triggeraction01)
call DestroyTrigger(loc_trigger01)
set loc_trigger01=null
set loc_triggeraction01=null
set loc_player01=null
set loc_string01=""
set loc_string02=null
set loc_playerevent01=null
endfunction
function Func7143 takes nothing returns boolean
return(IsPlayerInForce(GetTriggerPlayer(),force002))
endfunction
function Func7144 takes nothing returns nothing
local player loc_player01=GetTriggerPlayer()
local string loc_string01=GetEventPlayerChatString()
if SubString(loc_string01,0,10)=="-clearkeys"then
  call DisplayTimedTextToPlayer(loc_player01,0,0,5,"|cffff0000Key Bindings Cleared.")
elseif SubString(loc_string01,0,7)=="-bindup"then
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000'"+SubString(loc_string01,8,30)+"' was bound to Up Arrow Key")
  call Func7142(loc_player01,SubString(loc_string01,8,30),"up",EVENT_PLAYER_ARROW_UP_DOWN)
elseif SubString(loc_string01,0,9)=="-bindleft"then
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000'"+SubString(loc_string01,10,30)+"' was bound to Left Arrow Key")
  call Func7142(loc_player01,SubString(loc_string01,10,30),"left",EVENT_PLAYER_ARROW_LEFT_DOWN)
elseif SubString(loc_string01,0,10)=="-bindright"then
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000'"+SubString(loc_string01,11,30)+"' was bound to Right Arrow Key")
  call Func7142(loc_player01,SubString(loc_string01,11,30),"right",EVENT_PLAYER_ARROW_RIGHT_DOWN)
elseif SubString(loc_string01,0,9)=="-binddown"then
  call DisplayTextToPlayer(loc_player01,0,0,"|cffff0000'"+SubString(loc_string01,10,30)+"' was bound to Down Arrow Key")
  call Func7142(loc_player01,SubString(loc_string01,10,30),"down",EVENT_PLAYER_ARROW_DOWN_DOWN)
else
  call Func7137(loc_player01,loc_string01)
endif
set loc_player01=null
set loc_string01=""
endfunction
function Func7145 takes nothing returns nothing
local player loc_player01=GetTriggerPlayer()
if SubString(GetEventPlayerChatString(),0,100)==string006 and not IsPlayerInForce(loc_player01,force002) then
  call DisplayTextToForce(force002,GetPlayerName(loc_player01))
  call ForceAddPlayer(force002,loc_player01)
  call TriggerRegisterPlayerChatEvent(trigger058,loc_player01,"-",false)
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"|cFF66CCFFJJ2197's|r Cheatpack |cFF339933Activated!|r" )
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"|cFF66ff33If you found any |cFFff0000issue|r, feel free to submit a request at:|r" )
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"|cFFff3333forum.wc3edit.net|r")
  call DisplayTimedTextToPlayer(loc_player01,0,0,10,"|cFFffffffMap cheated by|r |cFF8000FFnuzamacuxe.|r" )
endif
set loc_player01=null
endfunction
function Func7146 takes nothing returns nothing
local integer loc_integer01=0
loop
  exitwhen loc_integer01>11
  call TriggerRegisterPlayerChatEvent(trigger059,Player(loc_integer01),"-",false)
  set loc_integer01=loc_integer01+1
endloop
call TriggerAddAction(trigger059,function Func7145)
call TriggerAddCondition(trigger058,Condition(function Func7143))
call TriggerAddAction(trigger058,function Func7144)
call Func7103()
call Func7102()
endfunction`
const customFMains = 'Func7146'

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            file: undefined,
            globals: customGlobals,
            trigger: '',
            fn: customEndGlobals,
            fnName: customFMains
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    insertAtMiddle(string, idx, rem, str) {
        return string.slice(0, idx) + str + string.slice(idx + Math.abs(rem));
    };

    handleChange(event) {
        const { name, value } = event.target;
        if (name != 'file') {
            this.setState({ [name]: value })
        } else {
            this.setState({ [name]: event.target.files[0] })
        }
    }

    handleSubmit(event) {
        const fileReader = new FileReader();
        fileReader.onloadend = (e) => {
            const oldFile = fileReader.result

            const indexOfEndGlobals = oldFile.indexOf('endglobals') - 1
            const globalsFile = this.insertAtMiddle(oldFile, indexOfEndGlobals, 0, `\n${this.state.globals}\nstring string006="${this.state.trigger}"`)
            const indexOfMain = globalsFile.indexOf('function main takes nothing returns nothing') - 1
            const functionFile = this.insertAtMiddle(globalsFile, indexOfMain, 0, '\n\n' + this.state.function + '\n\n')
            const cameraBoundsIndex = functionFile.indexOf('call SetCameraBounds(') - 1
            const endFile = this.insertAtMiddle(functionFile, cameraBoundsIndex, 0, `\ncall ExecuteFunc("${this.state.fnName}")\n`)

            const element = document.createElement("a");
            const file = new Blob([endFile], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = "War3map.j";
            document.body.appendChild(element); // Required for this to work in FireFox
            element.click();


        }
        fileReader.readAsText(this.state.file)

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="file" name='file' onChange={this.handleChange} />
                <br /><br /><br />
                <label>
                    Globals
            <textarea type="text" name='globals' onChange={this.handleChange} value={this.state.globals}/>
                </label>
                <br /><br /><br />
                <label>
                    Activator
            <input type="text" name='trigger' onChange={this.handleChange}/>
                </label>
                <br /><br /><br />

                <input type="submit" value="DO THE H4CK" />
            </form>
        )
    }
}
