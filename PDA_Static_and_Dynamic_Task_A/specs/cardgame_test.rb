require_relative('../card.rb')
require_relative('../testing_task_2.rb')
require('minitest/autorun')

class CardGameTest < MiniTest::Test

  def setup

    @cardgame = CardGame.new()

    @card1 = Card.new("hearts", 1)
    @card2 = Card.new("diamonds", 5)
    @card3 = Card.new("spades", 9)

    @cards = [@card1, @card2, @card3]

  end

  def test_check_for_ace__true()
    assert_equal(true, @cardgame.check_for_ace(@card1) )
  end

  def test_check_for_ace__false()
    assert_equal(false, @cardgame.check_for_ace(@card2))
  end

  def test_highest_card__return_first_card
    assert_equal(@card2, @cardgame.highest_card(@card2, @card1))
  end

  def test_highest_card__return_second_card
    assert_equal(@card3, @cardgame.highest_card(@card2, @card3))
  end

  def test_cardgame_cards_total
    assert_equal("You have a total of 15", CardGame.cards_total(@cards))
  end




end
