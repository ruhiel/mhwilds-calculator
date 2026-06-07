const motionData = [
    ["突進斬り", 1, 28, 1], ["斬り下ろし", 1, 19, 1.3], ["横斬り", 1, 18, 1.3], ["斜め斬り上げ", 1, 24, 1.3],
    ["斜め斬り下ろし", 1, 27, 1], ["水平斬り", 1, 27, 1.2], ["斬り返し", 1, 28, 1.2], ["回転斬り上げ", 1, 39, 1.2],
    ["回転斬り", 1, 41, 1], ["溜め斬り落とし(1)", 1, 18, 1], ["溜め斬り落とし(2)", 1, 28, 1.2], ["溜め斬り落とし(3)", 4, 14, 0.3],
    ["溜め斬り落とし(派生)(1)", 1, 18, 1], ["溜め斬り落とし(派生)(2)", 1, 28, 1.2], ["溜め斬り落とし(派生)(3)", 4, 28, 0.3],
    ["斬り上げ", 1, 18, 1], ["盾攻撃", 1, 16, 1], ["バックナックル", 1, 27, 1], ["ハードバッシュ", 1, 40, 1],
    ["旋刈り", 1, 65, 1], ["溜め斬り", 1, 40, 1], ["駆け上がり斬り", 1, 25, 1], ["フォールバッシュ(1)", 1, 52, 1],
    ["フォールバッシュ(2)", 1, 47, 1], ["飛び込み斬り", 1, 30, 1], ["ジャストラッシュ(1)", 1, 10, 0],
    ["ジャストラッシュ(2)", 2, 15, 1], ["ジャストラッシュ(3)", 1, 20, 1], ["ジャストラッシュ(4)", 1, 30, 0],
    ["ジャストラッシュ(5)", 1, 25, 1], ["ジャストラッシュ(6)", 3, 18, 1], ["ジャストラッシュ(ジャスト)(1)", 1, 40, 0],
    ["ジャストラッシュ(ジャスト)(2)", 1, 40, 1.5], ["ジャストラッシュ(ジャスト)(3)", 1, 45, 1.5], ["ジャストラッシュ(ジャスト)(4)", 1, 60, 0],
    ["ジャストラッシュ(ジャスト)(5)", 1, 80, 1.5], ["ジャストラッシュ(ジャスト)(6)", 1, 25, 1], ["ジャストラッシュ(ジャスト)(7)", 3, 34, 1],
    ["ガード斬り", 1, 14, 1], ["滑り込み斬り(1)", 1, 10, 1], ["滑り込み斬り(2)", 1, 50, 1], ["ジャンプ突進斬り", 1, 18, 1],
    ["ジャンプ斬り", 1, 20, 1], ["落下突き", "n", 12, 0.3], ["反撃斬り", 1, 55, 1.5], ["集中急所突き(1)", 2, 15, 1],
    ["集中急所突き(2)", 3, 19, 0.3], ["フォールスラッシュ(1)", 2, 15, 1], ["フォールスラッシュ(2)", 3, 20, 1],
    ["フォールスラッシュ(3)", 1, 7, 0.3], ["バッシュアッパー(1)", 2, 15, 1], ["バッシュアッパー(2)", 2, 20, 0],
    ["騎乗攻撃(1)", 1, 10, 1], ["騎乗攻撃(2)", 1, 10, 1], ["下乗攻撃", 1, 20, 1]
];

const inputAtk = document.getElementById('inputAtk');
const inputElem = document.getElementById('inputElem');
const inputCrit = document.getElementById('inputCrit');
const inputSharp = document.getElementById('inputSharpness');
const inputPhysHz = document.getElementById('inputPhysHz');
const inputElemHz = document.getElementById('inputElemHz');
const tableBody = document.getElementById('motionTableBody');
const checkNushi = document.getElementById('checkNushi');
const checkCharm = document.getElementById('checkCharm');
const inputFullChargeRate = document.getElementById('inputFullChargeRate');
const fullChargeRateDisplay = document.getElementById('fullChargeRateDisplay');
const fullChargeSliderContainer = document.getElementById('fullChargeSliderContainer');
const inputShuseiRate = document.getElementById('inputShuseiRate');
const shuseiRateDisplay = document.getElementById('shuseiRateDisplay');
const shuseiSliderContainer = document.getElementById('shuseiSliderContainer');
const inputKonshinRate = document.getElementById('inputKonshinRate');
const konshinRateDisplay = document.getElementById('konshinRateDisplay');
const konshinSliderContainer = document.getElementById('konshinSliderContainer');
const inputChallengerRate = document.getElementById('inputChallengerRate');
const challengerRateDisplay = document.getElementById('challengerRateDisplay');
const challengerSliderContainer = document.getElementById('challengerSliderContainer');
const inputWeakRate = document.getElementById('inputWeakRate');
const weakRateDisplay = document.getElementById('weakRateDisplay');
const weakSliderContainer = document.getElementById('weakSliderContainer');

let skillAtkMult = 1.0;
let skillAtkAdd = 0;
let challengerAtkAdd = 0;
let challengerCritBonus = 0;
let eyeCritBonus = 0;
let weakCritBonus = 0;
let konshinCritBonus = 0;
let critDamageMult = 1.25;
let shuseiMult = 1.0;
let fullChargeAdd = 0;
let rengekiAtkAdd = 0;
let rengekiElemAdd = 0;
let buffAdd = 0;
let drugAdd = 0;
let seedAdd = 0;
let powderAdd = 0;
let sokubakuAtkAdd = 0;
let rengekiKyoukaAdd = 0;
let kokushokuIttaiAdd = 0;
let mugaCritBonus = 0;
let restorationBonuses = [
    { atk: 0, crit: 0, elem: 0 },
    { atk: 0, crit: 0, elem: 0 },
    { atk: 0, crit: 0, elem: 0 },
    { atk: 0, crit: 0, elem: 0 },
    { atk: 0, crit: 0, elem: 0 }
];

let fullChargeRate = 1.0;
let shuseiRate = 1.0;
let konshinRate = 1.0;
let challengerRate = 1.0;
let weakRate = 1.0;

let elemAtkMult = 1.0;
let elemAtkAdd = 0;

window.stepHz = function (id, delta) {
    const el = document.getElementById(id);
    el.value = Math.min(
        100,
        Math.max(0, parseInt(el.value) + delta)
    );
    calculate();
};

// initTable関数のみ差し替え
function initTable() {
    tableBody.innerHTML = motionData.map(m => {
        const motionName = m[0];
        const motion = m[2];
        const elemValue = m[3];
        const hits = m[1];
        const hitDisplay = typeof hits === "string" ? hits : (hits >= 2 ? Math.floor(hits) : '');

        return `
                <tr data-mv="${motion}" data-elev="${elemValue}">
                    <td class="motion-name">
                        <div class="motion-container">
                            ${motionName}
                            <span class="motion-tooltip">モーション値:${motion} / 属性補正:${elemValue}</span>
                        </div>
                    </td>
                    <td class="res-hit" style="text-align: center; color: var(--text-sub);">${hitDisplay}</td>
                    <td class="res-normal">0</td>
                    <td class="res-critical">0</td>
                    <td class="res-expected val-expected">0</td>
                </tr>
            `
    }).join('');
}

function calculate() {
    let baseAtk = parseFloat(inputAtk.value) || 0;
    let baseElem = parseFloat(inputElem.value) || 0;
    let baseCrit = parseFloat(inputCrit.value) || 0;
    const sharpPhys = parseFloat(inputSharp.value);
    const sharpElem = parseFloat(inputSharp.options[inputSharp.selectedIndex].getAttribute('data-elem'));
    const charmAdd = checkCharm.checked ? 6 : 0;
    const nushiMult = checkNushi.checked ? 1.05 : 1.0;

    // ★ 復元ボーナスの合計値を算出
    const restoreAtkAdd = restorationBonuses.reduce((sum, b) => sum + b.atk, 0);
    const restoreCritAdd = restorationBonuses.reduce((sum, b) => sum + b.crit, 0);
    const restoreElemAdd = restorationBonuses.reduce((sum, b) => sum + b.elem, 0);

    baseAtk = baseAtk + restoreAtkAdd;
    baseCrit = baseCrit + restoreCritAdd;
    baseElem = baseElem + restoreElemAdd;

    const totalAtk = Math.floor(
        (baseAtk * skillAtkMult * getShuseiMult() * nushiMult)
        + skillAtkAdd
        + getChallengerAtkAdd()
        + getFullChargeAdd()
        + rengekiAtkAdd
        + buffAdd
        + charmAdd
        + drugAdd
        + seedAdd
        + powderAdd
        + sokubakuAtkAdd
        + rengekiKyoukaAdd
        + kokushokuIttaiAdd
    );
    const totalElem = Math.floor(baseElem * elemAtkMult) + elemAtkAdd + rengekiElemAdd;

    const effElemDisplay = totalElem * 0.1 * sharpElem;

    const rawCrit =
        baseCrit +
        getChallengerCritBonus() +
        eyeCritBonus +
        getWeakCritBonus() +
        getKonshinCritBonus() +
        mugaCritBonus;
    const cappedCrit = Math.min(100, Math.max(0, rawCrit));
    const critDec = cappedCrit / 100;

    document.getElementById('displayTotalAtk').textContent = totalAtk;
    document.getElementById('displayTotalElem').textContent = totalElem;
    const effAtk = totalAtk * sharpPhys * (1 + (critDamageMult - 1) * critDec);
    document.getElementById('displayEffAtk').textContent = effAtk.toFixed(1);
    document.getElementById('displayEffCrit').textContent = cappedCrit + '%';
    document.getElementById('displayEffElem').textContent = effElemDisplay.toFixed(1);

    const physHz = parseFloat(inputPhysHz.value) || 0;
    const elemHz = parseFloat(inputElemHz.value) || 0;

    document.querySelectorAll('#motionTableBody tr').forEach(row => {
        const mv = parseFloat(row.getAttribute('data-mv'));
        const eMult = parseFloat(row.getAttribute('data-elev'));
        const damagePhys = totalAtk * (mv / 100) * (physHz / 100) * sharpPhys;
        const damageElem = totalElem * 0.1 * (elemHz / 100) * sharpElem * eMult;
        const dNormal = damagePhys + damageElem;
        const dCrit = (damagePhys * critDamageMult) + damageElem;

        row.querySelector('.res-normal').textContent = dNormal.toFixed(1);
        row.querySelector('.res-critical').textContent = dCrit.toFixed(1);
        const expected = (dNormal * (1 - critDec)) + (dCrit * critDec);
        row.querySelector('.res-expected').textContent = expected.toFixed(1);
    });
}

function setupDropdown(triggerId, menuId, onSelect) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!trigger || !menu) return;
    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.skill-options').forEach(m => {
            if (m !== menu) m.classList.remove('show');
        });
        menu.classList.toggle('show');
    });
    menu.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => {
            menu.querySelectorAll('.option-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            const lv = item.getAttribute('data-lv');
            trigger.querySelector('.skill-level-preview').textContent = lv;
            if (lv === "未選択") trigger.classList.add('is-empty');
            else trigger.classList.remove('is-empty');
            onSelect(item);
            menu.classList.remove('show');
            calculate();
        });
    });
}

function setupHiddenButton(buttonId, bodyId, iconId) {
    document.getElementById(buttonId).addEventListener('click', () => {
        const isHidden = document.getElementById(bodyId).classList.toggle('hidden');
        document.getElementById(iconId).textContent = isHidden ? '▲' : '▼';
    });
}

setupDropdown('atkSkillTrigger', 'atkSkillMenu', (item) => {
    skillAtkMult = parseFloat(item.getAttribute('data-mult'));
    skillAtkAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('challengerTrigger', 'challengerMenu', (item) => {
    challengerAtkAdd = parseInt(item.getAttribute('data-atk'));
    challengerCritBonus = parseInt(item.getAttribute('data-crit'));
    const lv = item.getAttribute('data-lv');
    if (lv === "未選択") {
        challengerSliderContainer.style.display = 'none';
    } else {
        // 非表示から表示に切り替わるときに、値を100%に強制リセット
        challengerRate = 1.0;
        if (inputChallengerRate) {
            inputChallengerRate.value = 100; // スライダーのつまみを100に移動
        }
        if (challengerRateDisplay) {
            challengerRateDisplay.textContent = '100%'; // 表示テキストを100%に更新
        }
        challengerSliderContainer.style.display = 'block';
    }
    // スキル選択が変更されたので再計算
    calculate();
});
setupDropdown('rengekiTrigger', 'rengekiMenu', (item) => {
    rengekiAtkAdd = parseInt(item.getAttribute('data-atk'));
    rengekiElemAdd = parseInt(item.getAttribute('data-elem'));
});
setupDropdown('eyeTrigger', 'eyeMenu', (item) => {
    eyeCritBonus = parseInt(item.getAttribute('data-crit'));
});
setupDropdown('weakTrigger', 'weakMenu', (item) => {
    weakCritBonus = parseInt(item.getAttribute('data-crit'));
    const lv = item.getAttribute('data-lv');
    if (lv === "未選択") {
        weakSliderContainer.style.display = 'none';
    } else {
        // 非表示から表示に切り替わるときに、値を100%に強制リセット
        weakRate = 1.0;
        if (inputWeakRate) {
            inputWeakRate.value = 100; // スライダーのつまみを100に移動
        }
        if (weakRateDisplay) {
            weakRateDisplay.textContent = '100%'; // 表示テキストを100%に更新
        }
        weakSliderContainer.style.display = 'block';
    }
    // スキル選択が変更されたので再計算
    calculate();
});
setupDropdown('konshinTrigger', 'konshinMenu', (item) => {
    konshinCritBonus = parseInt(item.getAttribute('data-crit'));
    const lv = item.getAttribute('data-lv');
    if (lv === "未選択") {
        konshinSliderContainer.style.display = 'none';
    } else {
        // 非表示から表示に切り替わるときに、値を100%に強制リセット
        konshinRate = 1.0;
        if (inputKonshinRate) {
            inputKonshinRate.value = 100; // スライダーのつまみを100に移動
        }
        if (konshinRateDisplay) {
            konshinRateDisplay.textContent = '100%'; // 表示テキストを100%に更新
        }
        konshinSliderContainer.style.display = 'block';
    }
    // スキル選択が変更されたので再計算
    calculate();
});
setupDropdown('cbTrigger', 'cbMenu', (item) => {
    critDamageMult = parseFloat(item.getAttribute('data-mult'));
});
setupDropdown('shuseiTrigger', 'shuseiMenu', (item) => {
    shuseiMult = parseFloat(item.getAttribute('data-mult'));
    const lv = item.getAttribute('data-lv');
    if (lv === "未選択") {
        shuseiSliderContainer.style.display = 'none';
    } else {
        // 非表示から表示に切り替わるときに、値を100%に強制リセット
        shuseiRate = 1.0;
        if (inputShuseiRate) {
            inputShuseiRate.value = 100; // スライダーのつまみを100に移動
        }
        if (shuseiRateDisplay) {
            shuseiRateDisplay.textContent = '100%'; // 表示テキストを100%に更新
        }
        shuseiSliderContainer.style.display = 'block';
    }
    // スキル選択が変更されたので再計算
    calculate();
});
setupDropdown('fullChargeTrigger', 'fullChargeMenu', (item) => {
    fullChargeAdd = parseInt(item.getAttribute('data-add'));
    const lv = item.getAttribute('data-lv');
    if (lv === "未選択") {
        fullChargeSliderContainer.style.display = 'none';
    } else {
        // 非表示から表示に切り替わるときに、値を100%に強制リセット
        fullChargeRate = 1.0;
        if (inputFullChargeRate) {
            inputFullChargeRate.value = 100; // スライダーのつまみを100に移動
        }
        if (fullChargeRateDisplay) {
            fullChargeRateDisplay.textContent = '100%'; // 表示テキストを100%に更新
        }
        fullChargeSliderContainer.style.display = 'block';
    }
    // スキル選択が変更されたので再計算
    calculate();
});
setupDropdown('buffTrigger', 'buffMenu', (item) => {
    buffAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('drugTrigger', 'drugMenu', (item) => {
    drugAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('seedTrigger', 'seedMenu', (item) => {
    seedAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('powderTrigger', 'powderMenu', (item) => {
    powderAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('sokubakuTrigger', 'sokubakuMenu', (item) => {
    sokubakuAtkAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('rengekiKyoukaTrigger', 'rengekiKyoukaMenu', (item) => {
    rengekiKyoukaAdd = parseInt(item.getAttribute('data-add'));
});
setupDropdown('kokushokuTrigger', 'kokushokuMenu', (item) => {
    kokushokuIttaiAdd = parseInt(item.getAttribute('data-atk')) || 0;
});
setupDropdown('mugaTrigger', 'mugaMenu', (item) => {
    mugaCritBonus = parseInt(item.getAttribute('data-crit')) || 0;
});
setupDropdown('elemAtkTrigger', 'elemAtkMenu', (item) => {
    elemAtkMult = parseFloat(item.dataset.mult) || 1.0;
    elemAtkAdd = parseInt(item.dataset.add) || 0;
});

window.addEventListener('click', () => {
    document.querySelectorAll('.skill-options').forEach(m => m.classList.remove('show'));
});

setupHiddenButton('toggleMotionList', 'motionCardBody', 'toggleMotionIcon');

setupHiddenButton('toggleAtkSkills', 'atkSkillsBody', 'toggleAtkIcon');

setupHiddenButton('toggleCrtSkills', 'critSkillsBody', 'toggleCritIcon');

setupHiddenButton('toggleEtcSkills', 'etcSkillsBody', 'toggleEtcIcon');

setupHiddenButton('toggleBuffs', 'buffBody', 'toggleBuffIcon');

[checkCharm, checkNushi].forEach(el => {
    el.addEventListener('change', calculate);
});

[inputAtk, inputElem, inputCrit, inputSharp, inputPhysHz, inputElemHz].forEach(el => {
    el.addEventListener('input', calculate);
});
// 復元ボーナス5枠のドロップダウンを一括設定
for (let i = 1; i <= 5; i++) {
    setupDropdown(`bonus${i}Trigger`, `bonus${i}Menu`, (item) => {
        restorationBonuses[i - 1] = {
            atk: parseInt(item.getAttribute('data-atk')) || 0,
            crit: parseInt(item.getAttribute('data-crit')) || 0,
            elem: parseInt(item.getAttribute('data-elem')) || 0
        };
    });
}
if (inputFullChargeRate) {
    inputFullChargeRate.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        fullChargeRateDisplay.textContent = val + '%';
        fullChargeRate = val / 100;
        calculate();
    });
}
if (inputShuseiRate) {
    inputShuseiRate.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        shuseiRateDisplay.textContent = val + '%';
        shuseiRate = val / 100;
        calculate();
    });
}
if (inputKonshinRate) {
    inputKonshinRate.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        konshinRateDisplay.textContent = val + '%';
        konshinRate = val / 100;
        calculate();
    });
}
if (inputChallengerRate) {
    inputChallengerRate.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        challengerRateDisplay.textContent = val + '%';
        challengerRate = val / 100;
        calculate();
    });
}
if (inputWeakRate) {
    inputWeakRate.addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        weakRateDisplay.textContent = val + '%';
        weakRate = val / 100;
        calculate();
    });
}
function getFullChargeAdd() {
    return fullChargeAdd * fullChargeRate;
}
function getShuseiMult() {
    return 1.0 + ((shuseiMult - 1.0) * shuseiRate);
}
function getKonshinCritBonus() {
    return konshinCritBonus * konshinRate;
}
function getChallengerAtkAdd() {
    return challengerAtkAdd * challengerRate;
}
function getChallengerCritBonus() {
    return challengerCritBonus * challengerRate;
}
function getWeakCritBonus() {
    return weakCritBonus * weakRate;
}
initTable();
calculate();