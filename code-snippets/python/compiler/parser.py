import ply.yacc as yacc
from lexer import tokens

class Node:
    def __init__(self, op, left=None, right=None, val=None) -> None:
        self.left = left
        self.right = right
        self.op = op
        
def p_expression_binop(p):
    """
    expression  : expression PLUS expression
                | expression MINUS expression
                | expression TIMES expression
                | expression DIVIDE expression
    """
    if p[2] == "+":
        p[0] = Node("plus", p[1], p[3])
    if p[2] == "-":
        p[0] = Node("minus", p[1], p[3])
    if p[2] == "*":
        p[0] = Node("times", p[1], p[3])
    if p[2] == "/":
        p[0] = Node("divide", p[1], p[3])
        
def p_expression_group(p):
    """
    expression : LPAREN expression RPAREN
    """
    p[0] = ("group-expression", p[2])


def p_expression_number(p):
    """
    expression : NUMBER
    """
    p[0] = Node("number", val=p[1])


# Build the parser
parser = yacc.yacc()

input_code = """
1+2+4-3
"""
ast = parser.parse(input_code)
print(ast)


def interpret_ast(ast):
    print(ast)
    if ast.op != "number":
        left = interpret_ast(ast.left)
        right = interpret_ast(ast.right)
        
    if ast.op == "number":
        return ast
    elif ast.op == "plus":
        return left + right
    elif ast.op == "minus":
        return left - right
    elif ast.op == "times":
        return left * right
    elif ast.op == "divide":
        return left / right

print(interpret_ast(ast))