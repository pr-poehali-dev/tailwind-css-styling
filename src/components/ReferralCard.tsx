import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ReferralCardProps {
  className?: string;
}

const ReferralCard: React.FC<ReferralCardProps> = ({ className }) => {
  return (
    <Card
      className={`bg-horror-shadow border-2 border-dashed border-horror-blood/50 ${className}`}
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-horror-bone gothic-text text-xl">
          С друзьями выгоднее
        </CardTitle>
        <p className="text-horror-blood font-bold gothic-text text-lg">
          Пригласи друга — получи бонус!
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Bonuses Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-horror-bone text-sm font-medium">
              За каждого друга:
            </p>
            <div className="bg-horror-dark/50 p-3 rounded-lg border border-horror-rust/30">
              <div className="flex items-center space-x-2">
                <Icon
                  name="MessageCircle"
                  size={16}
                  className="text-horror-blood"
                />
                <span className="text-horror-bone text-sm">
                  +5 сообщений в сутки на 3 дня
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-horror-bone text-sm font-medium">
              За подписку друга:
            </p>
            <div className="bg-horror-dark/50 p-3 rounded-lg border border-horror-rust/30">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-horror-blood" />
                <span className="text-horror-bone text-sm">
                  до 15 дней премиума
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Rewards Section */}
        <div className="bg-horror-dark/30 p-4 rounded-lg border border-horror-blood/20">
          <p className="text-horror-bone font-medium mb-3 gothic-text">
            Награды выдаются, если друг:
          </p>

          <div className="space-y-2">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-horror-blood rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-horror-bone/90 text-sm">
                активировал бота (написал сообщение)
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-horror-blood rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-horror-bone/90 text-sm">
                оформил подписку в течение 3 дней
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-horror-blood/10 p-4 rounded-lg border border-horror-blood/30 text-center">
            <div className="text-3xl font-bold text-horror-blood horror-title mb-1">
              45
            </div>
            <div className="text-horror-bone text-xs uppercase tracking-wide">
              максимум
            </div>
            <div className="text-horror-bone/70 text-xs">сообщений в сутки</div>
          </div>

          <div className="bg-horror-blood/10 p-4 rounded-lg border border-horror-blood/30 text-center">
            <div className="text-3xl font-bold text-horror-blood horror-title mb-1">
              1 = 1
            </div>
            <div className="text-horror-bone text-xs uppercase tracking-wide">
              пользователь
            </div>
            <div className="text-horror-bone/70 text-xs">награда</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralCard;
