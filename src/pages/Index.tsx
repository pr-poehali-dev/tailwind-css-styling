import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [userPoints, setUserPoints] = useState(1337);
  const [referralCode] = useState("DEATH666");
  const [referrals, setReferrals] = useState(13);

  const horrorRewards = [
    { points: 100, reward: "Кровавый аватар", unlocked: true },
    { points: 500, reward: "Призрачная тема", unlocked: true },
    { points: 1000, reward: "Демонический титул", unlocked: true },
    { points: 2000, reward: "Скелет в шкафу", unlocked: false },
    { points: 5000, reward: "Душа программиста", unlocked: false },
  ];

  const referralThreats = [
    "Приведи друга или... мы найдем тебя 🔍",
    "Поделись кодом, пока мы добрые 😈",
    "Твои друзья должны знать правду 💀",
    "Распространяй ужас... и получай баллы 🎭",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-horror-shadow via-horror-dark to-black text-horror-bone">
      {/* Header */}
      <header className="p-6 border-b border-horror-blood/20">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Skull" size={32} className="text-horror-blood" />
            <h1 className="text-3xl font-bold horror-title text-horror-blood">
              БЛОГ КОШМАРОВ
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge
              variant="destructive"
              className="bg-horror-blood text-horror-bone"
            >
              💀 {userPoints} баллов
            </Badge>
            <Icon name="User" size={24} className="text-horror-bone" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6 text-center">
        <div className="container mx-auto">
          <img
            src="/img/1db92502-fafe-4162-a4ee-9308b5c255ce.jpg"
            alt="Зловещий блог"
            className="w-full max-w-2xl mx-auto mb-8 rounded-lg shadow-2xl border-2 border-horror-blood"
          />
          <h2 className="text-6xl font-bold mb-6 horror-title text-horror-blood">
            ДОБРО ПОЖАЛОВАТЬ В ПРЕИСПОДНЮЮ
          </h2>
          <p className="text-xl mb-8 gothic-text text-horror-bone/90">
            Здесь каждый пост - это новый кошмар, а каждый лайк - капля крови
          </p>
          <Button
            size="lg"
            className="bg-horror-blood hover:bg-horror-blood/80 text-horror-bone text-xl px-8 py-4 border-2 border-horror-rust gothic-text"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            ВОЙТИ В ТЕМНОТУ
          </Button>
        </div>
      </section>

      {/* Referral System */}
      <section className="py-16 px-6 bg-horror-dark/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 horror-title text-horror-blood">
            РЕФЕРАЛЬНАЯ СИСТЕМА
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Referral Stats */}
            <Card className="bg-horror-shadow/50 border-horror-blood/30">
              <CardHeader>
                <CardTitle className="flex items-center text-horror-blood gothic-text">
                  <Icon name="Users" size={24} className="mr-2" />
                  Твоя армия тьмы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-horror-bone">Приведенных душ:</span>
                    <Badge variant="destructive" className="bg-horror-blood">
                      {referrals}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-horror-bone">Твой код:</span>
                    <code className="bg-horror-blood/20 px-2 py-1 rounded text-horror-rust font-mono">
                      {referralCode}
                    </code>
                  </div>
                  <Button
                    className="w-full bg-horror-blood/20 hover:bg-horror-blood/30 border border-horror-blood gothic-text"
                    onClick={() => navigator.clipboard.writeText(referralCode)}
                  >
                    <Icon name="Copy" size={16} className="mr-2" />
                    Скопировать код
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Threats */}
            <Card className="bg-horror-shadow/50 border-horror-blood/30">
              <CardHeader>
                <CardTitle className="flex items-center text-horror-blood gothic-text">
                  <Icon name="Heart" size={24} className="mr-2" />
                  Милые угрозы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {referralThreats.map((threat, index) => (
                    <div
                      key={index}
                      className="p-3 bg-horror-dark/50 rounded-lg border border-horror-rust/30"
                    >
                      <p className="text-horror-bone/90 gothic-text">
                        {threat}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 horror-title text-horror-blood">
            СИСТЕМА НАКОПЛЕНИЯ БАЛЛОВ
          </h3>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <div className="text-6xl font-bold mb-4 creepy-text text-horror-blood">
                {userPoints}
              </div>
              <p className="text-xl gothic-text text-horror-bone/90">
                Баллов в твоей коллекции душ
              </p>
              <Progress
                value={(userPoints / 5000) * 100}
                className="mt-4 h-4 bg-horror-dark"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {horrorRewards.map((reward, index) => (
                <Card
                  key={index}
                  className={`border-2 ${
                    reward.unlocked
                      ? "bg-horror-blood/10 border-horror-blood"
                      : "bg-horror-shadow/30 border-horror-bone/20"
                  }`}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl mb-2">
                      {reward.unlocked ? "🏆" : "🔒"}
                    </div>
                    <h4 className="font-bold gothic-text text-horror-bone mb-2">
                      {reward.reward}
                    </h4>
                    <Badge
                      variant={reward.unlocked ? "destructive" : "secondary"}
                      className={
                        reward.unlocked ? "bg-horror-blood" : "bg-horror-shadow"
                      }
                    >
                      {reward.points} баллов
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-6 bg-horror-dark/20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12 horror-title text-horror-blood">
            ПОСЛЕДНИЕ КОШМАРЫ
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {["Призрак в коде", "Баг-убийца", "Мертвая база данных"].map(
              (title, index) => (
                <Card
                  key={index}
                  className="bg-horror-shadow/50 border-horror-blood/30 hover:bg-horror-shadow/70 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <Icon
                        name="Skull"
                        size={20}
                        className="text-horror-blood mt-1"
                      />
                      <div>
                        <h4 className="font-bold gothic-text text-horror-bone mb-2">
                          {title}
                        </h4>
                        <p className="text-horror-bone/70 text-sm">
                          История о том, как код превратился в настоящий ужас...
                        </p>
                        <div className="mt-4 flex items-center space-x-2 text-xs text-horror-rust">
                          <Icon name="Eye" size={14} />
                          <span>666 просмотров</span>
                          <Icon name="Heart" size={14} />
                          <span>13 лайков</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-horror-blood/20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Icon name="Skull" size={24} className="text-horror-blood" />
            <span className="text-horror-bone gothic-text">
              © 2024 Блог Кошмаров. Все права защищены темными силами.
            </span>
            <Icon name="Skull" size={24} className="text-horror-blood" />
          </div>
          <p className="text-horror-bone/70 text-sm">
            Не читайте наш блог перед сном... мы предупредили 😈
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
