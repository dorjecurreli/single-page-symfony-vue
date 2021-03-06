<?php

declare(strict_types=1);

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

final class UserFixtures extends Fixture
{
    public const DEFAULT_USER_LOGIN = 'login';

    public const DEFAULT_USER_PASSWORD = 'bar';

    public function load(ObjectManager $manager): void
    {
        $userEntity = new User();
        $userEntity->setLogin(self::DEFAULT_USER_LOGIN);
        $userEntity->setPlainPassword(self::DEFAULT_USER_PASSWORD);
        $userEntity->setRoles(['ROLE_FOO']);
        $manager->persist($userEntity);
        $manager->flush();
    }
}