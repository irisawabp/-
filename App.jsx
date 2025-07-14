import React, { useState } from "react";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { ScrollArea } from "./components/ui/scroll-area";

const categories = {
  肉類: ["鶏肉 肩肉", "豚肉 ひき肉", "牛肉 ひき肉", "豚肉 バラ肉", "牛肉 フィレ肉", "牛肉 ロース", "鶏肉 ささみ", "鶏肉 もも肉", "鶏肉 胸肉", "牛豚 合い挽き肉", "ハム", "ベーコン", "ソーセージ", "ウィンナー"],
  野菜果物: ["アボカド", "ほうれん草", "だいこん", "かぶ", "トマト", "にら", "卵", "納豆", "しいたけ", "きゅうり", "長ネギ", "ミニトマト", "ジャガイモ", "レンコン", "にんじん", "バナナ", "いちご", "りんご", "レモン", "ピーマン", "ブロッコリー", "レタス", "小松菜", "アスパラガス", "とうもろこし", "キャベツ", "枝豆", "もやし", "玉ねぎ", "さつまいも", "ナス", "にんにく", "生姜", "ミョウガ", "パプリカ", "かぼちゃ", "山芋", "ゴーヤ", "サニーレタス", "チンゲンサイ", "セロリ", "スナップエンドウ", "いんげん", "ごぼう", "せり", "白菜"],
  魚介類: ["明太子", "いくら", "塩シャケ", "ホタテ", "甘エビ", "銀だら", "ぶり", "マグロ", "さば", "カツオ", "ほっけ", "うなぎ", "アサリ", "牡蠣", "乾燥わかめ", "しじみ", "シーチキン", "たこ", "いか", "昆布", "かつお節"],
  調味料: ["醤油", "わさび", "七味唐辛子", "一味唐辛子", "バター", "ラー油", "ごま油", "オリーブオイル", "料理酒", "味噌", "みりん", "砂糖", "塩", "からし", "白コショウ", "ブラックペッパー", "バジル", "パセリ", "マヨネーズ", "豆板醤", "ポン酢", "オイスターソース", "ナンプラー", "白だし", "ごま", "おろし生姜チューブ", "おろしにんにくチューブ", "マスタード", "中濃ソース", "ウスターソース", "米酢", "かんたん酢", "バルサミコ酢", "タバスコ", "鶏ガラスープの素", "柚子胡椒", "ハイミー", "かつお節", "薄力粉", "片栗粉", "レモン汁", "味の素"],
  乳製品: ["チェダーチーズ", "ブラッダーチーズ", "チーズ", "とろけるチーズ", "パルメザンチーズ", "モッツァレラチーズ", "牛乳"],
  乾物主食: ["パスタ", "緑豆春雨", "馬鈴薯春雨", "レトルトご飯", "梅干し"],
  雑貨: ["ボディソープ", "シャンプー", "リンス", "化粧水", "オイル", "歯磨き粉", "歯間ブラシ", "浴槽洗剤", "トイレ洗剤", "ティッシュペーパー", "食器洗剤", "入浴剤", "プロテイン", "燃やすゴミ袋", "燃やさないゴミ袋", "プラスチックゴミ袋", "生ゴミの袋", "ガス缶", "ポリ袋", "ジップロック", "スポンジ"]
};

export default function InventoryApp() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    if (!selected.includes(item)) {
      setSelected([...selected, item]);
    }
  };

  const isSelected = (item) => selected.includes(item);

  return (
    <div className="p-4 grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">生活物品リスト</h2>
          <Input
            placeholder="検索..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4"
          />
          <ScrollArea className="h-[500px] pr-2">
            {Object.entries(categories).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {items
                    .filter((item) => item.includes(search))
                    .map((item) => (
                      <Button
                        key={item}
                        variant="outline"
                        disabled={isSelected(item)}
                        className={isSelected(item) ? "opacity-40" : ""}
                        onClick={() => handleSelect(item)}
                      >
                        {item}
                      </Button>
                    ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">買い物リスト</h2>
          <ul className="list-disc pl-6">
            {selected.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
