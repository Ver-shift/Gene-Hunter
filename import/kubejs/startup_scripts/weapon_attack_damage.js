// 武器攻击力替换：把武器自带的 minecraft:generic.attack_damage 替换为
// gene_hunter 中对应武器形态的攻击力（数值不变，只换属性）。
// 原版攻击力设为 -1，抵消玩家自带 1 点基础攻击力，使手持武器时原版攻击力为 0。
//
// 注意：KubeJS 的 ItemEvents.modification 目前不支持用标签 #gene_hunter:xxx 过滤
// （KubeJS 类型文档注明 tag ingredients are not supported at this time），
// 所以下面的清单直接抄录自 gene_hunter 的四个 item tag。若标签增删，请同步这些数组。

let replaceVanillaDamage = true

let typeAttributes = {
  'gene_hunter:blade_attack_damage': [
    'simplyswords:iron_sai',
    'simplyswords:gold_sai',
    'simplyswords:diamond_sai',
    'simplyswords:netherite_sai',
    'simplyswords:runic_sai',
    'simplyswords:iron_cutlass',
    'simplyswords:gold_cutlass',
    'simplyswords:diamond_cutlass',
    'simplyswords:netherite_cutlass',
    'simplyswords:runic_cutlass',
    'simplyswords:iron_katana',
    'simplyswords:gold_katana',
    'simplyswords:diamond_katana',
    'simplyswords:netherite_katana',
    'simplyswords:runic_katana',
    'simplyswords:iron_chakram',
    'simplyswords:gold_chakram',
    'simplyswords:diamond_chakram',
    'simplyswords:netherite_chakram',
    'simplyswords:runic_chakram',
    'simplyswords:bramblethorn',
    'simplyswords:chompolotl',
    'simplyswords:livyatan',
    'simplyswords:molten_edge',
    'simplyswords:shadowsting',
    'simplyswords:soulstealer',
    'simplyswords:tempest',
    'simplyswords:wraithfang',
  ]
  ,
  'gene_hunter:sword_attack_damage': [
    'simplyswords:iron_rapier',
    'simplyswords:gold_rapier',
    'simplyswords:diamond_rapier',
    'simplyswords:netherite_rapier',
    'simplyswords:runic_rapier',
    'simplyswords:iron_longsword',
    'simplyswords:gold_longsword',
    'simplyswords:diamond_longsword',
    'simplyswords:netherite_longsword',
    'simplyswords:runic_longsword',
    'simplyswords:iron_claymore',
    'simplyswords:gold_claymore',
    'simplyswords:diamond_claymore',
    'simplyswords:netherite_claymore',
    'simplyswords:runic_claymore',
    'simplyswords:iron_twinblade',
    'simplyswords:gold_twinblade',
    'simplyswords:diamond_twinblade',
    'simplyswords:netherite_twinblade',
    'simplyswords:runic_twinblade',
    'simplyswords:iron_spear',
    'simplyswords:gold_spear',
    'simplyswords:diamond_spear',
    'simplyswords:netherite_spear',
    'simplyswords:runic_spear',
    'simplyswords:iron_halberd',
    'simplyswords:gold_halberd',
    'simplyswords:diamond_halberd',
    'simplyswords:netherite_halberd',
    'simplyswords:runic_halberd',
    'simplyswords:iron_glaive',
    'simplyswords:gold_glaive',
    'simplyswords:diamond_glaive',
    'simplyswords:netherite_glaive',
    'simplyswords:runic_glaive',
    'simplyswords:arcanethyst',
    'simplyswords:awakened_lichblade',
    'simplyswords:brimstone_claymore',
    'simplyswords:caelestis',
    'simplyswords:dormant_relic',
    'simplyswords:emberblade',
    'simplyswords:enigma',
    'simplyswords:flamewind',
    'simplyswords:harbinger',
    'simplyswords:icewhisper',
    'simplyswords:magiblade',
    'simplyswords:magispear',
    'simplyswords:ribboncleaver',
    'simplyswords:righteous_relic',
    'simplyswords:slumbering_lichblade',
    'simplyswords:stars_edge',
    'simplyswords:stormbringer',
    'simplyswords:storms_edge',
    'simplyswords:sunfire',
    'simplyswords:sword_on_a_stick',
    'simplyswords:tainted_relic',
    'simplyswords:thunderbrand',
    'simplyswords:toxic_longsword',
    'simplyswords:twisted_blade',
    'simplyswords:waking_lichblade',
    'simplyswords:watcher_claymore',
    'simplyswords:waxweaver',
    'simplyswords:whisperwind',
    'simplyswords:wickpiercer',
    'gene_hunter:test_single_hand_sword',
    'gene_hunter:test_one_hand_damage_sword',
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:iron_sword',
    'minecraft:golden_sword',
    'minecraft:diamond_sword',
    'minecraft:netherite_sword',
  ]
  ,
  'gene_hunter:axe_attack_damage': [
    'simplyswords:iron_greataxe',
    'simplyswords:gold_greataxe',
    'simplyswords:diamond_greataxe',
    'simplyswords:netherite_greataxe',
    'simplyswords:runic_greataxe',
    'simplyswords:iron_warglaive',
    'simplyswords:gold_warglaive',
    'simplyswords:diamond_warglaive',
    'simplyswords:netherite_warglaive',
    'simplyswords:runic_warglaive',
    'simplyswords:iron_scythe',
    'simplyswords:gold_scythe',
    'simplyswords:diamond_scythe',
    'simplyswords:netherite_scythe',
    'simplyswords:runic_scythe',
    'simplyswords:watching_warglaive',
    'simplyswords:magiscythe',
    'simplyswords:decaying_relic',
    'simplyswords:emberlash',
    'simplyswords:soulpyre',
    'simplyswords:soulrender',
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'minecraft:golden_axe',
    'minecraft:diamond_axe',
    'minecraft:netherite_axe',
  ]
  ,
  'gene_hunter:hammer_attack_damage': [
    'simplyswords:iron_greathammer',
    'simplyswords:gold_greathammer',
    'simplyswords:diamond_greathammer',
    'simplyswords:netherite_greathammer',
    'simplyswords:runic_greathammer',
    'simplyswords:frostfall',
    'simplyswords:hearthflame',
    'simplyswords:hiveheart',
    'simplyswords:mjolnir',
    'simplyswords:soulkeeper',
  ]
}
ItemEvents.modification(event => {
  Object.entries(typeAttributes).forEach(([attribute, items]) => {
    items.forEach(itemId => {
      event.modify(itemId, item => {
        let damage = item.getBaseAttackDamage()
        if (!damage || damage <= 0) {
          return
        }
        if (replaceVanillaDamage) {
          // 玩家自带 1 点基础攻击力，设成 -1 把它抵消，使原版攻击力归零
          item.setBaseAttackDamage(-1)
        }
        item.addAttributeModifier(attribute, {
          amount: damage,
          operation: 'add_value',
          id: 'gene_hunter:weapon_type/' + itemId.split(':')[1],
        }, 'mainhand')
      })
    })
  })
})

